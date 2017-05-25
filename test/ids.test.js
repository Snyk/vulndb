var test = require('tape');
var fs = require('fs');
var walkFiles = require('../lib/utils').walkFiles;
var path = require('path');


test('validate all /data/ vulns', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  var vulnIds = [];
  var patchIds = [];
  
  vulnDataFiles.forEach(function (vulnDataFile) {
    var vuln = JSON.parse(fs.readFileSync(vulnDataFile));

    var vids = [vuln.id];
    if (vuln.alternativeIds) {
      vids = vids.concat(vuln.alternativeIds);
    }
    if (vuln.identifiers.ALTERNATIVE) {
      vids = vids.concat(vuln.identifiers.ALTERNATIVE);
    }

    // make sure we have an id
    t.assert(vuln.id, 'id exists');
    if (vuln.packageManager === 'npm') {
      t.equals(vuln.moduleName, vuln.id.split(':')[1],
      'moduleName matches the name in the id');
      t.assert(vuln.identifiers.ALTERNATIVE.length > 0);
      vuln.identifiers.ALTERNATIVE.forEach(function (iId) {
        if (iId.indexOf(':') > -1) {
          t.equals(vuln.moduleName, iId.split(':')[1],
            'moduleName matches the name in the alternative id');
        } else {
          var xid = iId.split('-');
          t.equals(
            vuln.language, xid[1].toLowerCase(),
            'language matches the lang in alt. id');
          t.equals(
            vuln.moduleName.toUpperCase().replace(/-/g,'').replace(/_/g,'').replace(/\./g,''),
            xid[2],
            'moduleName matches the name in alt. id');
          t.assert(vulnIds.indexOf(xid[3]) === -1, 'non unique id ' + iId);
          vulnIds = vulnIds.concat([xid[3]]);
        }
      });
      // validate patches
      if (vuln.patches.length) {
        t.test(vulnDataFile + ' ' + vuln.id + ' patches', function (t) {
          vuln.patches.forEach(function (p) {
            t.assert(p.id, 'valid patch id ' + p.id);
            t.assert(p.id.indexOf(vuln.id) > 0, 'patch id contains vulnId');
            t.assert(patchIds.indexOf(p.id) < 0, 'unique patch id ' + p.id);
            patchIds.push(p.id);
          });
          t.end();
        });
      }
    } else if (vuln.packageManager === 'rubygems') {
      const id = vuln.id.split('-');
      t.equals(vuln.language, id[1].toLowerCase(),
               'language matches the lang in id');
      t.equals(vuln.moduleName.toUpperCase().replace(/-/g,'').replace(/_/g,'').replace(/\./g,''),
               id[2],
               'moduleName matches the name in the id');
      t.assert(vulnIds.indexOf(id[3]) === -1, 'non unique id ' + vuln.id);
               vulnIds = vulnIds.concat([id[3]]);

    } else if (vuln.packageManager === 'maven') {
      const id = vuln.id.split('-');
      t.equals(vuln.language, id[1].toLowerCase(),
              'language matches the lang in alt. id');
      t.equals(vuln.moduleName.split(':')[0].toUpperCase().replace(/-/g,'').replace(/_/g,'').replace(/\./g,''),           id[2],
               'moduleName matches the name in the id');
      t.assert(vulnIds.indexOf(id[3]) === -1, 'non unique id ' + vuln.id);
               vulnIds = vulnIds.concat([id[3]]);
    } else {
      t.fail('package manager doesn\'t exist: ' + vuln.packageManager);
    }
  });
});
