var fs = require('fs');
var test = require('tape');
var panda = require('../lib/panda-db');

var walkFiles = require('../lib/utils').walkFiles;

var validator = require('is-my-json-valid');
var schema = require('./fixtures/schema/vulnerability-data-schema.json');

var options = {
  formats: {
    'snyk-vuln-id': /^(npm):[0-9a-z-\._]+:(\d){8}(-\d+)?$/,
    'package-manager': /^(npm|RubyGems)$/,
    'language': /^(js|ruby)$/,
  },
};

var validate = validator(schema, options);


test('better schema validation', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  t.plan(vulnDataFiles.length);

  vulnDataFiles.forEach(function (vulnDataFile) {
    var jsonVuln = JSON.parse(fs.readFileSync(vulnDataFile));

    t.assert(validate(jsonVuln), vulnDataFile + ' ' +
      JSON.stringify(validate.errors));
  });

});

test('schema validation after shrink', function (t) {
  panda.fetch('./data').then(function (snykDb) {

    var vulns = snykDb.all();

    t.plan(vulns.length * 2);

    vulns.forEach(function (vuln) {
      t.assert(vuln.id.split(':')[1] === vuln.moduleName,
        vuln.moduleName + ' matches ' + vuln.id + ' id part');

      if (validate(vuln)) {
        t.pass(vuln.id);
      } else {
        t.fail(vuln.id + ' ' + JSON.stringify(validate.errors));
      }
    });

  });
});
