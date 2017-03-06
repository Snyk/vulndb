#! /usr/bin/env node

const fs = require('fs');
const rubySemver = require('@snyk/ruby-semver');
const invert = require('@snyk/invert-semver-ranges')(rubySemver);

const rubygemsPath = `${__dirname}/../data/rubygems`;
fs.readdirSync(rubygemsPath)
.map(gemDirName => `${rubygemsPath}/${gemDirName}`)
.forEach(gemDirPath => {
  if (!fs.statSync(gemDirPath).isDirectory()) {
    throw new Error(`'${gemDirPath}' is not a directory!`);
  }
  fs.readdirSync(gemDirPath)
  .map(vulnDirName => `${gemDirPath}/${vulnDirName}`)
  .forEach(vulnDirPath => {
    const vulnDataPath = `${vulnDirPath}/data.json`;
    const vulnData = require(vulnDataPath);
    if (!vulnData.semver.vulnerable) {
      const unaffected = vulnData.semver.unaffected || [];
      const patched = vulnData.semver.patched || [];
      vulnData.semver.vulnerable = invert(unaffected.concat(patched));
      fs.writeFileSync(vulnDataPath,
        JSON.stringify(vulnData, null, "\t") + "\n");
    }
  });
});
