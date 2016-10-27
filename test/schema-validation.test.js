var fs = require('fs');
var test = require('tape');
var panda = require('../lib/panda-db');

var walkFiles = require('../lib/utils').walkFiles;

var validator = require('is-my-json-valid');
var npmSchema = require('./fixtures/schema/vulnerability-data-schema-npm.json');
var rubygemsSchema = require('./fixtures/schema/vulnerability-data-schema-rubygems.json');

var options = {
  formats: {
    'snyk-vuln-id': /^(((npm):[0-9a-z-\._]+:(\d){8}(-\d)?)|(SNYK-(JS|RUBY)-[A-Z0-9]+-\d+))?$/,
    'package-manager': /^(npm|rubygems)$/,
    'language': /^(js|ruby)$/,
  },
};

var rubygemsValidate = validator(rubygemsSchema, options);
var npmValidate = validator(npmSchema, options);


test('better schema validation', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  t.plan(vulnDataFiles.length);

  vulnDataFiles.forEach(function (vulnDataFile) {
    var jsonVuln = JSON.parse(fs.readFileSync(vulnDataFile));
    var result;
    var errors;

    if (jsonVuln.packageManager === 'npm') {
      result = npmValidate(jsonVuln);
      errors = npmValidate.errors;
    } else {
      result = rubygemsValidate(jsonVuln);
      errors = rubygemsValidate.errors;
    }

    if (result) {
      t.pass(jsonVuln.id);
    } else {
      t.fail(jsonVuln.id + ' ' + JSON.stringify(errors));
    }
  });

});
