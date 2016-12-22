const test = require('tape');
const fs = require('fs');
const semver = require('semver');
const walkFiles = require('../lib/utils').walkFiles;
const path = require('path');
const rubySemver = require('@snyk/ruby-semver');


test('validate all /data/ vulns', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  var vulnIds = [];
  var patchIds = [];

  vulnDataFiles.forEach(function (vulnDataFile) {
    var vuln = JSON.parse(fs.readFileSync(vulnDataFile));

    var id = vuln.id;

    if (vuln.packageManager === 'npm') {
      // vulnerable semver range
      t.assert(vuln.semver && vuln.semver.vulnerable &&
               semver.validRange(vuln.semver.vulnerable),
               vulnDataFile + ' vulnerable range: ' + vuln.semver.vulnerable);

      // patched semver range
      t.assert(vuln.semver && vuln.semver.unaffected &&
               semver.validRange(vuln.semver.unaffected),
               vulnDataFile + ' patched range: ' + vuln.semver.unaffected);

      // validate patches
      if (vuln.patches && vuln.patches.length) {
        t.test(vulnDataFile + ' ' + id + ' patches', function (t) {
          vuln.patches.forEach(function (p) {

            t.equal(p.urls.length, 1, 'has only 1 url');

            t.ok(semver.validRange(p.version), 'valid semver range ' + p.version);

            if (p.urls[0].indexOf('file://') == 0) {
              t.ok(fs.existsSync(path.join(path.parse(vulnDataFile).dir,
                    p.urls[0].replace('file://',''))),
                    'patch file ' + p.urls[0] + ' exists');

            } else if ((p.urls[0].indexOf('http://') == 0) ||
                        (p.urls[0].indexOf('https://') == 0)) {

              // TODO

            } else {
              t.fail('patch URI is wrong ' + p.urls[0]);
            }
          });

          t.end();
        });

      }
    } else if (vuln.packageManager === 'rubygems') {
      // vulnerable semver range exists and has at least one value
      t.assert(vuln.semver.vulnerable.length > 0,
              vulnDataFile + ' vulnerable range must have at least one value' )
      // vulnerable semver range contains comma
      vuln.semver.vulnerable.forEach(vulnerableRange => {
        t.assert(rubySemver.validRange(vulnerableRange) !== null ,
                vulnDataFile + ' vulnerable range: ' + vulnerableRange)
              })
      // only if unaffected exists, validate semver range contains coma
      if (vuln.semver.unaffected !== undefined){
        vuln.semver.unaffected.forEach(unaffectedRange => {
          t.assert(rubySemver.validRange(unaffectedRange),
                  vulnDataFile + ' unaffected range: ' + unaffectedRange)
                })
      }
    } else {
      t.fail('Unhandled Package Manager Name: ' + vuln.packageManager)
    }


  });
});
