# st

A module for serving static files.  Does etags, caching, etc.

## USAGE

In your JavaScript program:

```javascript
var st = require('st')
var mount = st({
  path: 'resources/static/',
  url: 'static/', // defaults to path option

  cache: {
    fd: {
      max: 1000, // number of fd's to hang on to
      maxAge: 1000*60*60, // amount of ms before fd's expire
    },

    stat: {
      max: 5000, // number of stat objects to hang on to
      maxAge: 1000 * 60, // number of ms that stats are good for
    },

    content: {
      max: 1024*1024*64, // how much memory to use on caching contents
      maxAge: 1000 * 60 * 10, // how long to cache contents for
    },

    index: { // irrelevant if not using index:true
      max: 1024 * 8, // how many bytes of autoindex html to cache
      maxAge: 1000 * 60 * 10, // how long to store it for
    },

    readdir: { // irrelevant if not using index:true
      max: 1000, // how many dir entries to cache
      maxAge: 1000 * 60 * 10, // how long to cache them for
    }
  },

  // indexing options
  index: true, // auto-index
  index: 'index.html', // use 'index.html' file as the index
  index: false, // return 404's for directories

  dot: false, // default: return 403 for any url with a dot-file part
  dot: true, // allow dot-files to be fetched normally

  passthrough: true, // calls next instead of returning a 404 error
  passthrough: false, // returns a 404 when a file or an index is not found
})

// with bare node.js
http.createServer(function (req, res) {
  if (mount(req, res)) return // serving a static file
  myCustomLogic(req, res)
}).listen(PORT)

// with express
app.use(mount)
// or
app.route('/static/:fooblz', function (req, res, next) {
  mount(req, res, next) // will call next() if it doesn't do anything
})
```

On the command line:

```
$ st -h
st
Static file server in node

Options:

-h --help             Show this help

-p --port PORT        Listen on PORT (default=1337)

-d --dir DIRECTORY    Serve the contents of DIRECTORY (default=cwd)

-i --index [INDEX]    Use the specified INDEX filename as the result
                      when a directory is requested.  Set to "true"
                      to turn autoindexing on, or "false" to turn it
                      off.  If no INDEX is provided, then it will turn
                      autoindexing on.  (default=true)

-ni --no-index        Same as "--index false"

-. --dot [DOT]        Allow .files to be served.  Set to "false" to
                      disable.

-n. --no-dot          Same as "--dot false"

-nc --no-cache        Turn off all caching.

-a --age AGE          Max age (in ms) of cache entries.
```

## Range Requests

Range requests are not supported.

I'd love a patch to add support for them, but the spec is kind of
confusing, and it's not always a clear win if you're not serving very
large files, so it should come with some very comprehensive tests.

Thankfully, as far as I can tell, it's always safe to serve the entire
file to a request with a range header, so st does behave correctly, if
not ideally in those situations.  It'd be great to be able to do the
better thing if the contents are cached, but still serve the full file
if it's not in cache (so that it can be cached for subsequent
requests).

## Memory Caching

To make things go as fast as possible, it is a good idea to set the
cache limits as high as you can afford, given the amount of memory on
your server.  Serving buffers out of process memory will generally
always be faster than hitting the file system.

## Client Caching

An etag header and last-modified will be attached to every request.
If presented with an `if-none-match` or `if-modified-since`, then
it'll return a 304 in the appropriate conditions.

The etag is generated based on the dev, ino, and last modified date.
Stat results are cached.

## Compression

If the request header claims to enjoy gzip encoding, and the filename
does not end in '.gz' or '.tgz', then the response will be gzipped.

Gzipped bytes are not included in the calculation of cache sizes, so
this utility will use a bit more memory than the cache.content.max and
cache.index.max bytes would seem to allow.  This will be less than
double, and usually insignificant for normal web assets, but is
important to consider if memory is at a premium.

## Filtering Output

If you want to do some fancy stuff to the file before sending it, you
can attach a `res.filter = myFilterStream` thing to the response
object before passing it to the mount function.

This is useful if you want to get the benefits of caching and gzipping
and such, but serve stylus files as css, for example.
