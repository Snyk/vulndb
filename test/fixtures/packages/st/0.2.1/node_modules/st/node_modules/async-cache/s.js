var AsyncCache = require('async-cache')
var fs = require('fs')
var stats = new AsyncCache({
  max: 100,
  maxAge:  1000,
  load: function (filePath, cb) {
    fs.stat(filePath, cb);
  }
})

stats.get(__filename, function(er, st) {
  if (er)
    throw er
  console.error('first', st)
})

setTimeout(function() {
  stats.get(__filename, function(er, st) {
    if (er)
      throw er
    console.error('second, from cache', st)
  })
}, 100)

setTimeout(function() {
  stats.get(__filename, function(er, st) {
    if (er)
      throw er
    console.error('third from cache', st)
  })
}, 200)

setTimeout(function() {
  stats.get(__filename, function(er, st) {
    if (er)
      throw er
    console.error('new, not from cache', st)
  })
}, 1100)

/*
$ node s.js 
first { dev: 234881026,
  mode: 33188,
  nlink: 1,
  uid: 24561,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 79975795,
  size: 742,
  blocks: 8,
  atime: Thu Jan 17 2013 11:26:22 GMT-0800 (PST),
  mtime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST),
  ctime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST) }
second, from cache { dev: 234881026,
  mode: 33188,
  nlink: 1,
  uid: 24561,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 79975795,
  size: 742,
  blocks: 8,
  atime: Thu Jan 17 2013 11:26:22 GMT-0800 (PST),
  mtime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST),
  ctime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST) }
third from cache { dev: 234881026,
  mode: 33188,
  nlink: 1,
  uid: 24561,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 79975795,
  size: 742,
  blocks: 8,
  atime: Thu Jan 17 2013 11:26:22 GMT-0800 (PST),
  mtime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST),
  ctime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST) }
new, not from cache { dev: 234881026,
  mode: 33188,
  nlink: 1,
  uid: 24561,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 79975795,
  size: 742,
  blocks: 8,
  atime: Thu Jan 17 2013 11:26:22 GMT-0800 (PST),
  mtime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST),
  ctime: Thu Jan 17 2013 11:26:21 GMT-0800 (PST) }
*/
