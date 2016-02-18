var path = require('path')
var fs = require('fs')
var zlib = require('zlib')
var http = require('http')
var server
var st = require('../st.js')
var request = require('request')
var tap = require('tap')
var test = tap.test
var port = process.env.PORT || 1337
var util = require('util')

var opts = util._extend({
  autoindex: true,
  path: path.dirname(__dirname),
  url: '/test'
}, global.options || {})

var mount = st(opts)
exports.mount = mount
exports.req = req

function req (url, headers, cb) {
  if (typeof headers === 'function') cb = headers, headers = {}
  request({ encoding: null,
            url: 'http://localhost:' + port + url,
            headers: headers }, cb)
}

test('setup', function (t) {
  server = http.createServer(function (req, res) {
    if (!mount(req, res)) {
      res.statusCode = 404
      return res.end('Not a match: ' + req.url)
    }
  }).listen(port, function () {
    t.pass('listening')
    t.end()
  })
})

tap.tearDown(function() {
  server.close()
})


var stEtag
var stExpect = fs.readFileSync(require.resolve('../st.js')).toString()
test('simple request', function (t) {
  req('/test/st.js', function (er, res, body) {
    t.equal(res.statusCode, 200)
    t.ok(/\/javascript$/.test(res.headers['content-type']))
    t.ok(res.headers.etag)
    stEtag = res.headers.etag
    t.equal(body.toString(), stExpect)
    t.end()
  })
})

test('304 request', function (t) {
  req('/test/st.js', {'if-none-match':stEtag}, function (er, res, body) {
    t.equal(res.statusCode, 304)
    t.notOk(body)
    t.end()
  })
})

test('gzip', function (t) {
  req('/test/st.js', {'accept-encoding':'gzip'},
      function (er, res, body) {
    t.equal(res.statusCode, 200)
    t.equal(res.headers['content-encoding'], 'gzip')
    zlib.gunzip(body, function (er, body) {
      if (er) throw er;
      t.equal(body.toString(), stExpect)
      t.end()
    })
  })
})

test('multiball!', function (t) {
  var n = 6
  req('/test/st.js', then)
  req('/test/README.md', then)
  req('/test/LICENSE', then)
  req('/test/package.json', then)
  req('/test/favicon.ico', then)
  req('/test/bin/server.js', then)

  function then (er, res, body) {
    if (er)
      throw er
    t.equal(res.statusCode, 200)

    // give them all time to close, then go again.
    if (--n === 0)
      setTimeout(function () {
        n = 6
        req('/test/st.js', then2)
        req('/test/README.md', then2)
        req('/test/LICENSE', then2)
        req('/test/package.json', then2)
        req('/test/favicon.ico', then2)
        req('/test/bin/server.js', then2)
      }, 200)
  }

  function then2 (er, res, body) {
    if (er)
      throw er
    t.equal(res.statusCode, 200)

    if (--n === 0)
      t.end()
  }
})
