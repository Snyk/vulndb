## Overview
[`engine.io`](https://www.npmjs.com/package/engine.io) is the realtime engine behind Socket.IO. It provides the foundation of a bidirectional connection between client and server.
Affected versions of the package are vulnerable to Denial of Service (DoS) by sending many upgrade events.
A client could possibly create a lot of intervals without the old ones having a chance of being cleared.

## Remediation
Upgrade `engine.io` to version 1.0.0 or higher.

## References
- https://github.com/socketio/engine.io/pull/223
- https://github.com/socketio/engine.io/commit/27141f962d72e6e1b0940f0cca88265799966b39
