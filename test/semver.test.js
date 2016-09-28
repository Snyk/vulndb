var test = require('tape');
var fs = require('fs');
var semver = require('semver');
var walkFiles = require('../lib/utils').walkFiles;
var path = require('path');


test('validate all /data/ vulns', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  var vulnIds = [];
  var patchIds = [];

  vulnDataFiles.forEach(function (vulnDataFile) {
    var vuln = JSON.parse(fs.readFileSync(vulnDataFile));

    var id = path.parse(vulnDataFile).dir.split('/').slice(2).join(':');

    // vulnerable semver range
    t.assert(vuln.semver && vuln.semver.vulnerable &&
             semver.validRange(vuln.semver.vulnerable),
             vulnDataFile + ' vulnerable range: ' + vuln.semver.vulnerable);

    // patched semver range
    t.assert(vuln.semver && vuln.semver.unaffected &&
             semver.validRange(vuln.semver.unaffected),
             vulnDataFile + ' patched range: ' + vuln.semver.unaffected);

    // validate patches
    if (vuln.patches.length) {
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

  });
});