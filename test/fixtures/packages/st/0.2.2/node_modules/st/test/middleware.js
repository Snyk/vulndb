var st = require('../st.js')
var test = require('tap').test
var port = process.env.PORT || 1337
var util = require('util')
var path = require('path')

var opts = util._extend({
  autoindex: true,
  path: path.dirname(__dirname),
  url: '/test'
}, global.options || {})

var mount = st(opts)

test('call next() if asset not found', function (t) {
  var req = { url: '/does-not-exist' }
  var res = {}
  t.plan(1)
  function next() {
    t.ok(true)
  }
  mount(req, req, next)
})
