#!/usr/bin/env node
var st = require('../st.js')
var http = require('http')
var port = +(process.env.PORT || 1337)
var dir = ''
var cacheSize = 0
var dot = false
var index = true
var cache = true
var age = null

for (var i = 2; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case '-p':
    case '--port':
      port = +(process.argv[++i])
      break

    case '-d':
    case '--dir':
      dir = process.argv[++i]
      break

    case '-.':
    case '--dot':
      dot = process.argv[++i]
      if (dot === undefined || dot === 'true') dot = true
      else if (dot === 'false') dot = false
      else if (dot.charAt(0) === '-') {
        --i
        dot = true
      }
      break

    case '-n.':
    case '--no-dot':
      dot = false
      break

    case '-i':
    case '--index':
      index = process.argv[++i]
      if (index === undefined || index === 'true') index = true
      if (index === 'false') index = false
      if (index.charAt(0) === '-') {
        --i
        index = true
      }
      break

    case '-ni':
    case '--no-index':
      index = false
      break

    case '-h':
    case '--help':
      help()
      process.exit(0)

    case '-nc':
    case '--no-cache':
      cache = false
      break

    case '-a':
    case '--age':
      age = process.argv[++i]
      if (isNaN(age)) {
        throw new Error('invalid age: ' + JSON.stringify(age))
      }
      age = +age
      break
  }
}

function help () {
  console.log(
['st'
,'Static file server in node'
,''
,'Options:'
,''
,'-h --help             Show this help'
,''
,'-p --port PORT        Listen on PORT (default=1337)'
,''
,'-d --dir DIRECTORY    Serve the contents of DIRECTORY (default=cwd)'
,''
,'-i --index [INDEX]    Use the specified INDEX filename as the result'
,'                      when a directory is requested.  Set to "true"'
,'                      to turn autoindexing on, or "false" to turn it'
,'                      off.  If no INDEX is provided, then it will turn'
,'                      autoindexing on.  (default=true)'
,''
,'-ni --no-index        Same as "--index false"'
,''
,'-. --dot [DOT]        Allow .files to be served.  Set to "false" to'
,'                      disable.'
,''
,'-n. --no-dot          Same as "--dot false"'
,''
,'-nc --no-cache        Turn off all caching.'
,''
,'-a --age AGE          Max age (in ms) of cache entries.'
].join('\n'))
}

if (isNaN(port)) throw new Error('invalid port: '+port)

var opt = {
  url: '/',
  path: dir,
  index: index,
  dot: dot,
  cache: {
    fd: {},
    stat: {},
    index: {},
    readdir: {},
    content: {}
  }
}

if (cache === false) {
  Object.keys(opt.cache).forEach(function (k) {
    opt.cache[k].max = 0
  })
} else {
  if (age) {
    Object.keys(opt.cache).forEach(function (k) {
      opt.cache[k].maxAge = age
    })
  }
  // maybe other cache-manipulating CLI flags?
}

var mount = st(opt)

http.createServer(function (q, s) {
  if (mount(q, s)) return
  s.statusCode = 404
  s.end('not found')
}).listen(port)

console.log('listening at http://127.0.0.1:' + port)
