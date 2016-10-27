#!/usr/bin/env node
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

var idsMap = {
  npm: 10000,
  ruby: 20000,
};

require('debug').enable('snyk:*');
var debug = require('debug')('snyk:db-utils');
var walkFiles = require('../lib/utils').walkFiles;

function processVulnDatas(inputDir) {

  if (!fs.lstatSync(inputDir).isDirectory()) {
    throw 'ERROR: Directory not found';
  }

  var vulnFiles = walkFiles(inputDir, 'data.json');

  for (var i = 0; i < vulnFiles.length; i++) {
    let vulnFile = vulnFiles[i];
    let jsonVuln = JSON.parse(fs.readFileSync(vulnFile));

    if (jsonVuln.packageManager === 'npm') {
      if (_.has(jsonVuln.identifiers, 'ALTERNATIVE')) {
        let altId = jsonVuln.identifiers.ALTERNATIVE.find(function(alternativeId) {
          return alternativeId.indexOf('SNYK-') === 0;
        });
        if (altId) {
          altId = altId.split('-');
          if (parseInt(altId[3]) > idsMap.npm) {
            idsMap.npm = parseInt(altId[3]) + 1;
          }
        }
      }
    } else if (jsonVuln.packageManager === 'rubygems') {
      if (jsonVuln.id) {
        var rid = parseInt(jsonVuln.id.split('-')[3]);
        if (rid > idsMap.npm) {
          idsMap.ruby = rid + 1;
        }
      }
    }
  }

  for (i = 0; i < vulnFiles.length; i++) {
    let vulnFile = vulnFiles[i];
    let jsonVuln = JSON.parse(fs.readFileSync(vulnFile));
    var changeMade = false;

    if (!_.has(jsonVuln, 'id')) {
      debug('Found missing id for vuln ' + vulnFile);
      if (jsonVuln.packageManager === 'npm') {
        var generatedNpmId = path.parse(vulnFile).dir.split('/').slice(2).join(':');
        jsonVuln.id = generatedNpmId;
        changeMade = true;
        debug('npm ID generated', generatedNpmId);
      } else if (jsonVuln.packageManager === 'rubygems') {
        var generatedRubyId = 'SNYK-RUBY-' + jsonVuln.moduleName.toUpperCase().replace(/-/g,'').replace(/_/g,'').replace(/\./g,'') + '-' + idsMap.ruby;
        jsonVuln.id = generatedRubyId;
        idsMap.ruby += 1;
        changeMade = true;
        debug('ruby ID generated', generatedRubyId);
      }
    }

    if (jsonVuln.packageManager === 'npm') {
      var needAltId = false;
      if (!_.has(jsonVuln.identifiers, 'ALTERNATIVE')) {
        debug('Alternative field is missing for ' + vulnFile);
        jsonVuln.identifiers.ALTERNATIVE = [];
        needAltId = true;
      } else {
        let altId = jsonVuln.identifiers.ALTERNATIVE.find(
        function(alternativeId) {
          return alternativeId.indexOf('SNYK-') === 0;
        });
        if (altId === undefined) {
          debug('SNYK type id is missing for ' + vulnFile);
          needAltId = true;
        }
      }
      if (needAltId) {
        var altId = 'SNYK-JS-' + jsonVuln.moduleName.toUpperCase().replace(/-/g,'').replace(/_/g,'').replace(/\./g,'') + '-' + idsMap.npm;
        idsMap.npm += 1;
        debug('snyk ID generated', altId);
        jsonVuln.identifiers.ALTERNATIVE = jsonVuln.identifiers.ALTERNATIVE.concat([altId]);
        changeMade = true;
      }
    } 
    
    if (changeMade) {
      console.log('wrote' + jsonVuln.id)
      fs.writeFileSync(vulnFile, JSON.stringify(jsonVuln, null, '\t'));
    }
  }
}

function printUsage(bin) {
  console.log('Usage:');
  console.log('  ./%s <data-dir>', bin);
}

var argv = process.argv.slice(2);

if (argv.length === 0) {
  printUsage(path.relative(process.cwd(), process.argv[1]));
  process.exit(1);
}

var dataDirectory = argv.shift();


processVulnDatas(dataDirectory);
