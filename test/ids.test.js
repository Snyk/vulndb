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

    var id = path.parse(vulnDataFile).dir.split('/').slice(2).join(':');

    var vids = [id];
    if (vuln.alternativeIds) {
      vids = vids.concat(vuln.alternativeIds);
    }
    if (vuln.identifiers.ALTERNATIVE) {
      vids = vids.concat(vuln.identifiers.ALTERNATIVE);
    }

    vids.forEach(function (vid) {
      t.assert(vulnIds.indexOf(vid) === -1, 'non unique id ' + vid);
    });

    vulnIds = vulnIds.concat(vids);

    // make sure we have an id
    t.assert(vuln.id, 'id exists');
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
        t.assert(vulnIds.indexOf(xid[3]) === -1, 'non unique id ' + xid[3]);
        vulnIds = vulnIds.concat([xid[3]]);
      }
    });

    // validate patches
    if (vuln.patches.length) {
      t.test(vulnDataFile + ' ' + id + ' patches', function (t) {
        vuln.patches.forEach(function (p) {
          t.assert(p.id, 'valid patch id ' + p.id);
          t.assert(p.id.indexOf(id) > 0, 'patch id contains vulnId');
          t.assert(patchIds.indexOf(p.id) < 0, 'unique patch id ' + p.id);
          patchIds.push(p.id);
        });
        t.end();
      });
    }

  });
});