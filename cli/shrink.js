#!/usr/bin/env node
'use strict';

var args = require('minimist')(process.argv.slice(2));
var path = require('path');
var debug = require('debug')('snyk:shrink');
var panda = require('../lib/panda-db');

function printUsage(bin) {
  console.error('Usage:');
  console.error('  ./%s <sourceDir> <outputJson>' +
    ' [--pdir targetPatchDir] [--prefix url_prefix]', bin);
}

if (args._.length < 2) {
  printUsage(path.relative(process.cwd(), process.argv[1]));
  process.exit(1);
}

debug(args);
var inputDir = args._.shift();
var jsonFile = args._.shift();

var options = {
  srcDataDir: inputDir,
  resolveReadme: true,
  dstPatchesDir: args.pdir,
  patchUrlPrefix: args.prefix,
}

panda.fetch(inputDir).then(function (snykDb) {
  snykDb.writeSnapshotFile(jsonFile, options).then(function (results) {
    console.log('Generated %s (%s vulnerabilities, %s readme files, ' +
      '%s patches, %s patch files)',
      results.filename, results.vulnerabiltyCount, results.readmeCount,
      results.patchCount, results.patchFilesCount);
  }).catch(function (error) {
    debug(error)
    console.error(error)
    process.exit(1)
  });

}).catch(function (error) {
  debug(error);
  console.error(error);
  process.exit(1);
});
