## Overview
[`socket.io`](https://www.npmjs.com/package/socket.io) is a node.js realtime framework server.
Affected versions of the package are vulnerable to Insecure Randomness due to the cryptographically insecure `Math.random` function which can produce predictable values and should not be used in security-sensitive context.

## Remediation
Upgrade `socket.io` to version 0.9.7 or higher.

## References
- [Github Changelog](https://github.com/socketio/socket.io/blob/master/History.md#097--2012-07-24)
- [Github PR](https://github.com/socketio/socket.io/pull/857)
- [Github Issue](https://github.com/socketio/socket.io/issues/856)
- [Github Commit](https://github.com/socketio/socket.io/commit/67b4eb9abdf111dfa9be4176d1709374a2b4ded8)
- [Google Group Forum](https://groups.google.com/forum/#!topic/socket_io/Peq-R_BTSx0/discussion)
