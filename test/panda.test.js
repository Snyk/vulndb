var test = require('tape');
var fs = require('fs');
var tmp = require('tmp');
var panda = require('../lib/panda-db');

test('Fetching data dir', function (t) {
  t.plan(1);

  panda.fetch('./data/').then(function (snykDb) {
    t.assert(snykDb.allIds().length > 84, 'more than 84 vulns found')
  }).catch(function (error) {
    t.fail(error);
  });
});


test('Fetching fixture data dir', function (t) {
  t.plan(6);
  var tmpSnapshot = tmp.fileSync();
  var tmpDir = tmp.dirSync({unsafeCleanup: true});
  var inputDir = './test/fixtures/panda/data/';

  panda.fetch(inputDir).then(function (snykDb) {
    t.equals(snykDb.allIds().length, 6, '6 vulns found')
    snykDb.writeSnapshotFile(tmpSnapshot.name).then(function (results) {
      t.equals(
          fs.readFileSync(tmpSnapshot.name, 'utf8'),
          fs.readFileSync('./test/fixtures/panda/data_snapshot.json', 'utf8'),
          'files are equal');
      t.equals(results.vulnerabiltyCount, 6)
      t.equals(results.readmeCount, 0);
      t.equals(results.patchCount, 10);
      t.equals(results.patchFilesCount, 0);

    }).catch(e => t.fail(e));

  }).catch(e => t.fail(e));
  tmpSnapshot.removeCallback();
  tmpDir.removeCallback();
});


test('Fetching fixture data dir resolved', function (t) {
  t.plan(6);
  var tmpSnapshot = tmp.fileSync();
  var tmpDir = tmp.dirSync({unsafeCleanup: true});
  var inputDir = './test/fixtures/panda/data/';

  var options = {
    srcDataDir: inputDir,
    resolveReadme: true,
    dstPatchesDir: tmpDir.name,
    patchUrlPrefix: 'https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches',
  }

  var inputDir = './test/fixtures/panda/data/';
  panda.fetch(inputDir).then(function (snykDb) {
    t.equals(snykDb.allIds().length, 6, '6 vulns found')

    snykDb.writeSnapshotFile(tmpSnapshot.name, options).then(function (results) {
      t.equals(
           fs.readFileSync(tmpSnapshot.name, 'utf8'),
           fs.readFileSync('test/fixtures/panda/data_snapshot_w_urls.json', 'utf8'),
           'files are equal');
      t.equals(results.vulnerabiltyCount, 6)
      t.equals(results.readmeCount, 6);
      t.equals(results.patchCount, 10);
      t.equals(results.patchFilesCount, 10);
    }).catch(e => t.fail(e));

  }).catch(e => t.fail(e));

  tmpSnapshot.removeCallback();
  tmpDir.removeCallback();
});

test('Fetching url', function (t) {
  t.plan(1);
  var url = 'https://s3.amazonaws.com/snyk-rules-pre-repository/' +
    'snapshots/develop/snapshot.json';

  panda.fetch(url).then(function (snykDb) {
    t.assert(snykDb.allIds().length > 68, 'vulns found')
  }).catch(function (error) {
    t.fail(error);
  });
});

test('Fetching snapshot file', function (t) {
  t.plan(1);
  var filename = './test/fixtures/panda/snapshot/sample_snapshot.json';
  panda.fetch(filename).then(function (snykDb) {
    t.equals(snykDb.allIds().length, 85, 'vulns found')
  }).catch(function (error) {
    t.fail(error);
  });
});