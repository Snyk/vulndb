const fs = require('fs');
const test = require('tape');
const panda = require('../lib/panda-db');
const walkFiles = require('../lib/utils').walkFiles;
const validator = require('is-my-json-valid');
const npmSchema = require('./fixtures/schema/vulnerability-data-schema-npm.json');
const rubygemsSchema = require('./fixtures/schema/vulnerability-data-schema-rubygems.json');
const mavenSchema = require('./fixtures/schema/vulnerability-data-schema-maven.json');

const options = {
  formats: {
    'snyk-vuln-id': /^(((npm):[0-9a-z-\._]+:(\d){8}(-\d)?)|(SNYK-(JS|RUBY|JAVA)-[A-Z0-9]+-\d+))?$/,
    'package-manager': /^(npm|rubygems|maven)$/,
    'language': /^(js|ruby|java)$/,
  },
};

const npmValidate = validator(npmSchema, options);
const rubygemsValidate = validator(rubygemsSchema, options);
const mavenValidate = validator(mavenSchema, options);

test('better schema validation', function (t) {
  const vulnDataFiles = walkFiles('./data', 'data.json');

  t.plan(vulnDataFiles.length);

  vulnDataFiles.forEach(function (vulnDataFile) {
    const jsonVuln = JSON.parse(fs.readFileSync(vulnDataFile));
    let result;
    let errors;

    if (jsonVuln.packageManager === 'npm') {
      result = npmValidate(jsonVuln);
      errors = npmValidate.errors;
    } else if (jsonVuln.packageManager === 'rubygems') {
      result = rubygemsValidate(jsonVuln);
      errors = rubygemsValidate.errors;
    } else if (jsonVuln.packageManager === 'maven') {
      result = mavenValidate(jsonVuln);
      errors = mavenValidate.errors;
    } else {
      t.fail('No such package manager: ' + jsonVuln.packageManager);
    }

    if (result) {
      t.pass(jsonVuln.id);
    } else {
      t.fail(jsonVuln.id + ' ' + JSON.stringify(errors));
    }
  });
});
