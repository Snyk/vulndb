#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

module.exports.walkFiles = walkFiles;

/**
 * Find all files in a directory having the given name
 *
 * @param {string} dir
 * @param {string} filename
 *
 * @returns {Array} list of paths
 */
function walkFiles(dir, filename) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkFiles(file, filename))
    } else {
      if (path.basename(file) == filename) {
        results.push(file)
      }
    }
    return results
  })
  return results;
}
