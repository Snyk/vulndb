#!/usr/bin/env node
'use strict';

var _ = require('lodash');
var request = require('request');
var fs = require('fs')
var fse = require('fs-extra');
var mkdirp = require('mkdirp');
var path = require('path');
var walkFiles = require('./utils').walkFiles;
var debug = require('debug')('snyk:panda-db');

module.exports = SnykDB;

var README_FILENAME = 'README.md';
var DATA_FILENAME = 'data.json';

/**
  * Snyk Advisory DB
  * @constructor
  * @param {Object} json db
  */
function SnykDB(json) {

  if (!(this instanceof SnykDB)) {
    return new SnykDB(json);
  }

  this._data = json;
  this._moduleNames = Object.keys(this._data.npm);

  // flat array of vulns
  this._vulns = this._moduleNames.reduce(function (acc, curr) {
    return acc.concat(json.npm[curr]);
  }, []);

  debug('processed %s vulnerabilities', this._vulns.length);

  // 'vuln ID -> vuln' map
  this._vulnsByIdMap = this._vulns.reduce(function (acc, curr) {
      acc[curr.id] = curr
      if (curr.identifiers.ALTERNATIVE) {
        curr.identifiers.ALTERNATIVE.forEach(function (altId) {
          acc[altId] = curr;
        });
      }
      return acc;
    }, {});

  debug('got %s ids', Object.keys(this._vulnsByIdMap).length)
}


/**
  * Create SnykDB instance by fetching the data from a file, url or directory
  *
  * @param {String} uri json file, url or data folder
  * @param {Object} options
  *
  * @returns {SnykDB}
  */
SnykDB.fetch = function (uri) {

  var promise = null;

  var isDir = false;
  try { isDir = fs.lstatSync(uri).isDirectory(); } catch (e) {}

  // check if directory (assuming /data/ dir)
  if (isDir) {
    debug('fetching directory: %s', uri)
    promise = this.shrinkDirToJson(uri);
  // if url
  } else if (uri.substring(0, 4) == 'http') {
    debug('fetching url: %s', uri)
    promise = requestJson(uri);
  // if just a file
  } else {
    debug('fetching file: %s', uri)
    promise = readJsonFile(uri);
  }
  return promise.then(function (data) {
    return new SnykDB(data);
  });
}

/**
  * Get map of vulns by module name
  *
  * @returns {Object} Map from moduleName to list of vulnerabilities
  */
SnykDB.prototype.allByModuleName = function () {
  return this._data.npm;
}

/**
  * Get all vulnerability ids
  *
  * @returns {Array} List of all ids
  */
SnykDB.prototype.allIds = function () {
  return Object.keys(this._vulnsByIdMap);
}

/**
  * Get list of all vulnerabilities
  *
  * @returns {Array} List of all vulnerabilities
  */
SnykDB.prototype.all = function () {
  return this._vulns;
}

/**
  * Get vulnerabilities by module name
  *
  * @param {String} name
  *
  * @returns {Array} List of vulnerabilities
  */
SnykDB.prototype.getByModuleName = function (name) {
  return this._data.npm[name];
};

/**
  * Get vulnerability by id
  *
  * @param {String} id
  *
  * @returns {Object} Vulnerability
  */
SnykDB.prototype.getById = function (id) {
  return this._vulnsByIdMap[id];
};

/**
 * Find all vulnerabilities with a CVE id
 *
 * @param {String} cve (i.e. CVE-2015-1234)
 *
 * @return {Array} List of vulnerabilities
 */
SnykDB.prototype.byCVE = function (cve) {
  return this.vulns.find(function (v) {
    return v.identifiers && v.identifiers.CVE &&
      v.identifiers.CVE.indexOf(cve) != -1;
  });
};

/**
 * Generate unified JSON from vulnerability data files
 *
 * @param {string} inputDir path to vulnerability data
 *
 * @returns {Object} Unifiled JSON file
 */
SnykDB.shrinkDirToJson = function (inputDir) {
  return new Promise(function (resolve, reject) {
    fs.exists(inputDir, function (exists) {
      if (!exists) {
        reject(new Error('ERROR: Directory ' + inputDir + ' not found'));
      }
    });

    var result = {};

    walkFiles(inputDir, DATA_FILENAME).forEach(function (vulnFile) {
      var jsonVuln = JSON.parse(fs.readFileSync(vulnFile));
      var id = path.parse(path.relative(inputDir, vulnFile)).dir.split('/');
      jsonVuln.id = id.join(':');

      // fill alternativeIds if needed (backward compatibility)
      if (jsonVuln.identifiers.ALTERNATIVE) {
        jsonVuln.alternativeIds = jsonVuln.identifiers.ALTERNATIVE;
      }

      if (!result[id[0]]) {
        result[id[0]] = {};
      }
      if (!result[id[0]][id[1]]) {
        result[id[0]][id[1]] = [];
      }
      result[id[0]][id[1]].push(jsonVuln);
    });

    resolve(result);
  });
}

/**
 * Write database to file
 *
 * @param {string} filename path to vulnerability data folder
 * @param {Object} opts options
 *
 * @returns {Object} result
 */
SnykDB.prototype.writeSnapshotFile = function (filename, opts) {
  var options = opts || {};
  var dbData = _.cloneDeep(this._data);

  debug(options);

  var results = {
    vulnerabiltyCount: 0,
    readmeCount: 0,
    patchCount: 0,
    patchFilesCount: 0,
    filename: filename,
  };


  return new Promise(function (resolve, reject) {

    Object.keys(dbData.npm).forEach(function (mod) {

      dbData.npm[mod].forEach(function (vuln) {

        var vulnIdPath = vuln.id.split(':').join('/');

        // if description is a file reference, resolve it
        if (options.resolveReadme &&
            vuln.description.indexOf('file://') == 0) {

          try {
            var readmeFile = path.join(options.srcDataDir, vulnIdPath,
                README_FILENAME);
            vuln.description = fs.readFileSync(readmeFile, 'utf8');
            results.readmeCount++;
          } catch (e) {
            reject(e.stack)
          }
        }
        results.vulnerabiltyCount++;

        vuln.patches.forEach(function (patch, patchIndex) {
          results.patchCount++;
          if (options.patchUrlPrefix) {
            if (options.patchUrlPrefix.slice(-1) != '/') {
              options.patchUrlPrefix += '/';
            }
            var uri = patch.urls[0];
            if (uri.indexOf('file://') == 0) {
              var patchFilename = uri.replace('file://','');
              patch.urls[0] = options.patchUrlPrefix +
                vulnIdPath + '/' + patchFilename;

              if (options.dstPatchesDir) {
                var srcPatch = path.join(options.srcDataDir, vulnIdPath,
                  patchFilename);
                var dstPatchDir = path.join(options.dstPatchesDir, vulnIdPath);
                mkdirp.sync(dstPatchDir);
                var dstPatch = path.join(dstPatchDir, patchFilename);
                fse.copySync(srcPatch, dstPatch);
                results.patchFilesCount++;
              }
            }
          }

        });
      });
    });

    var data = JSON.stringify(dbData, null, '\t');

    results.data = data;

    fs.writeFile(filename, data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

/**
  * Fetch json
  *
  * @param {string} url
  *
  * @returns {Object} json
  */
function requestJson(url) {
  return new Promise(function (resolve, reject) {
    request(url, {
      json: true,
    }, function (error, response, result) {
      if (error) {
        return reject(error);
      }

      if (response.statusCode === 404) {
        error = new Error('not found: ' + name);
        error.code = 404;
        return reject(error);
      }

      resolve(result);
    });
  });
}

/**
 * Read json from file
 *
 * @param {string} filename
 *
 * @returns {Object} json
 */
function readJsonFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(res));
      }
    });
  });
}