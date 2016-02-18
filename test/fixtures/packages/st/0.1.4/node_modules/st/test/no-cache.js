// turn off ALL caching.
global.options = {
  cache: false
}

// otherwise just the same as basic.
var basic = require('./basic.js')
var req = basic.req
var mount = basic.mount

// additional tests to ensure that it's actually not caching.
var test = require('tap').test
var port = process.env.PORT || 1337

test('all caches should be empty', function(t) {
  t.same(mount._this.cache.fd._cache.dump(), {})
  t.same(mount._this.cache.stat._cache.dump(), {})
  t.same(mount._this.cache.index._cache.dump(), {})
  t.same(mount._this.cache.readdir._cache.dump(), {})
  t.same(mount._this.cache.content._cache.dump(), {})
  t.end()
})
