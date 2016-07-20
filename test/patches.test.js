var test = require('tape');
var fs = require('fs');
var path = require('path');
var semver = require('semver');
var walkFiles = require('../lib/utils').walkFiles;
var exec = require('child_process');
var util = require('util');
var os = require('os');
var args = require('minimist')(process.argv.slice(2));

function testVuln(vulnDataFile, patchBinVersions, t) {
  console.log(vulnDataFile);
  var vuln = JSON.parse(fs.readFileSync(vulnDataFile));
  var id = path.parse(vulnDataFile).dir.split('/').slice(2).join(':');
  if (vuln.patches.length) {
    t.test(vulnDataFile + ' ' + id + ' patches', function (t) {
      vuln.patches.forEach(function (p) {
        testVulnPatch(vulnDataFile, vuln, p, patchBinVersions, t);
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

function testVulnPatch(vulnDataFile, vuln, p, patchBinVersions, t) {

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
    patchBinVersions.forEach(function (patchBin) {
      var patch = applyPatchInternal(patchBin,
        path.join(fixtureModulePath, fv),
        patchPath, patchBinVersions);

      if (patch.status === 0 && !patch.stdout.toString()) {
        t.pass(vuln.moduleName + '@' + fv + ' with ' +
          ('/' + patchBin).split('/').slice(-3).join('/'));
      } else {
        var msg = util.format('Exited with %s while applying %s to %s@%s:\nout:%s\nerr:%s',
          patch.status, patchPath, vuln.moduleName, fv, patch.stdout, patch.stderr);
        t.fail(msg);
      }
    });

  });

}

function applyPatchInternal(bin, modulePath, patchPath) {
  var patch = exec.spawnSync(bin,
    ['-up1', '--silent', '--dry-run', '-i', path.resolve(patchPath)],
    {
      cwd: modulePath,
      env: process.env,
    });

  return patch;
}


test('Test patches', function (t) {
  // can test a single package, for example:
  // `tape test/patches.test.js --name=sequelize | tap-spec`
  var testPath = 'name' in args ? '/npm/' + args.name : '';
  var vulnDataFiles = walkFiles('./data' + testPath, 'data.json');
  var patchBinVersions = walkFiles('./test/bin/' + os.type(), 'patch').map(
    function (v) {
      return path.resolve(v);
    });
  // also run the native patch (available in PATH)
  patchBinVersions.push('patch');
  vulnDataFiles.forEach(vulnDataFile =>
    testVuln(vulnDataFile, patchBinVersions, t));
});