## Overview
[`uws`](https://www.npmjs.com/package/uws) is Highly scalable WebSocket server &amp; client library.
Affected versions of the package are vulnerable to Denial of Service.

It is possible to crash the node process by sending a 256mb websocket message and exceeding V8's maximum string size.

## Remediation
Upgrade `uws` to version 0.10.9 or higher.


## References
- https://github.com/uWebSockets/uWebSockets/commit/37deefd01f0875e133ea967122e3a5e421b8fcd9
