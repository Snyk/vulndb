var fs = require('fs');
var test = require('tape');
var walkFiles = require('../lib/utils').walkFiles;
const cweData = require('./cwe.json');

test('Better content validation', function (t) {
  var vulnDataFiles = walkFiles('./data', 'data.json');

  vulnDataFiles.forEach(function (vulnDataFile) {
    var jsonVuln = JSON.parse(fs.readFileSync(vulnDataFile));
    var result;

    if (jsonVuln.identifiers.CWE[0]) {
      jsonVuln.identifiers.CWE.forEach(cwe => {
        if (!cwe.includes('CWE-')){
          result = false;
          t.fail('CWE is not in correct format: ' + cwe);
        } else {
          let flag = 0;
          cweData.forEach(cweId => {
            if(cwe === cweId.id){
              flag = 1;
              result = true;
            }
          });
          if (flag === 0) {
            result = false;
            t.fail('No such cwe: ', cwe);
          }
        }
      });
    } else {
      result = true;
    }
    if (result) {
      t.pass(jsonVuln.id);
    } else {
      t.fail(jsonVuln.id);
    }
  });
  t.end();
});
