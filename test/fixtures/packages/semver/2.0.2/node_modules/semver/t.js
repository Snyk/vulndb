var versions = require('./versions.json');
var semver = require('./');

var bad = []
versions.rows.forEach(function(row) {
  if (!semver.valid(row.key[0]))
    bad.push(row.key[0])
});

var http = require('http')
var qs = require('querystring')

// console.log(JSON.stringify(bad, null, 2))
var who = {}
run();

function run() {
  var v = bad.shift()
  if (!v)
    return done()
  var q = qs.stringify({
    group_level: 2,
    startkey: JSON.stringify([v]),
    endkey: JSON.stringify([v,{}])
  });
  http.request('http://isaacs.iriscouch.com/registry/_design/app/_view/allVersions?' + q)
    .on('response', function(res) {
      var b = ''
      res.setEncoding('utf8')
      res.on('data', function(c) { b += c })
      res.on('end', function() {
        b = JSON.parse(b)
        console.error(b)
        b.rows.forEach(function(r) {
          var n = r.key[1]
          who[n] = who[n] || []
          who[n].push(v)
        })
        run();
      })
    }).end()
}


function done() {
  console.log(who)
}
