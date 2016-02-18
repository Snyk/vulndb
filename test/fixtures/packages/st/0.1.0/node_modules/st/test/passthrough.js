var st = require('../st.js')
var test = require('tap').test
var util = require('util')
var path = require('path')

var opts = util._extend({
  index: false,
  path: path.resolve(__dirname, './fixtures'),
  url: '/',
  passthrough: true
}, global.options || {})

var mount = st(opts)

test('call next() if passthrough is set', function (t) {
  var req = { method: 'GET', url: '/doesnotexist.txt', headers: {} }
  var res = {
    error: function () {
      t.end()
    },
    setHeader: function () {},
    end: function () {}
  }
  t.plan(2)
  mount(req, res, function () {
    t.ok(true, "next called with nonexistant file");
    req.url='/';
    mount(req, res, function () {
      t.ok(true, "next called without indexing")
      t.end()
    });
  })
})

var opts2 = util._extend({
  autoindex: true,
  path: path.resolve(__dirname, './fixtures'),
  url: '/'
}, global.options || {})
mount2 = st(opts2)

test('return error if passthrough is not set', function (t) {
  var req = { method: 'GET', url: '/doesnotexist.txt', headers: {} }
  var res = {
    setHeader: function () {},
    error: function () {
      t.ok(true, "error used")
      t.end()
    },
    end: function () {}
  }
  t.plan(1)
  mount2(req, res, function () {
    t.end()
  })
})
