var test = require('tape');
var fs = require('fs');
var path = require('path');
var semver = require('semver');
var walkFiles = require('../lib/utils').walkFiles;
var exec = require('child_process');
var util = require('util');

function testVuln(vulnDataFile, t) {
  console.log(vulnDataFile);
  var vuln = JSON.parse(fs.readFileSync(vulnDataFile));
  var id = path.parse(vulnDataFile).dir.split('/').slice(2).join(':');
  if (vuln.patches.length) {
    t.test(vulnDataFile + ' ' + id + ' patches', function (t) {
      vuln.patches.forEach(function (p) {
        testVulnPatch(vulnDataFile, vuln, p, t);
      });
      t.end();
    });
  }
}


function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function (file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function testVulnPatch(vulnDataFile, vuln, p, t) {

  var patchPath = p.urls[0];

  if (patchPath.indexOf('file://') === 0) {
    patchPath = path.join(path.parse(vulnDataFile).dir,
          patchPath.replace('file://',''));

    t.ok(fs.existsSync(patchPath),
          'patch file ' + p.urls[0] + ' exists');

  } else if ((p.urls[0].indexOf('http://') === 0) ||
              (p.urls[0].indexOf('https://') === 0)) {

    // TODO: download it
    console.log('WARNING: skipping %s', p.urls[0]);
    return;

  } else {
    t.fail('patch URI is wrong ' + p.urls[0]);
  }

  var fixtureModulePath = path.join('.', 'test', 'fixtures', 'external',
    'packages', vuln.moduleName);


  if (!fs.existsSync(fixtureModulePath)) {
    // TODO
    console.log('WARNING: no fixtures dir for %s', fixtureModulePath);
    return;
  }

  var fixtureVersions = getDirectories(fixtureModulePath);
  var versionsInRange = fixtureVersions.filter(function (ver) {
    return semver.satisfies(ver, p.version);
  });

  t.assert(versionsInRange.length > 0, 'got ' + versionsInRange.length +
    ' fixture versions for ' + vuln.moduleName);

  versionsInRange.forEach(function (fv) {

    var patch = applyPatch(
      path.join(fixtureModulePath, fv, 'node_modules', vuln.moduleName),
      patchPath);

    if (patch.status === 0 && !patch.stdout.toString()) {
      t.pass(vuln.moduleName + '@' + fv);
    } else {
      var msg = util.format('Exited with %s while applying %s to %s@%s:\nout:%s\nerr:%s',
        patch.status, patchPath, vuln.moduleName, fv, patch.stdout, patch.stderr);
      t.fail(msg);
    }

  });

}

function applyPatch(modulePath, patchPath) {
  var patch = exec.spawnSync('patch',
    ['-up1', '--silent', '--dry-run', '-i', path.resolve(patchPath)],
    {
      cwd: modulePath,
      env: process.env,
    });

  return patch;
}

test('Test patches', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');
  vulnDataFiles.forEach(vulnDataFile => testVuln(vulnDataFile, t));
});