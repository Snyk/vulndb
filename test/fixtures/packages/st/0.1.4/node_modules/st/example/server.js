var st = require('st');
var http = require('http');

// Just serve the files in this dir
http.createServer(
  st(process.cwd())
).listen(1337);
