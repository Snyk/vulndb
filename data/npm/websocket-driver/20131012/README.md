## Overview
[`websocket-driver`](https://www.npmjs.com/package/websocket-driver) is WebSocket protocol handler with pluggable I/O.
The `Buffer` length is immediately allocated after reading the frame, up to a length that is no more that `MAX_LENGTH`, which is 2^53 - 1 (the largest precisely representable JS integer), and rejects larger frames with a 1009 error before creating the new Buffer.
But Node buffers have a max length of [1GB](https://github.com/joyent/node/blob/master/src/smalloc.h#L40) (0x3fffffff).
Parsing an incoming frame with length between 1GB and `MAX_LENGTH`, the parser will throw (and perhaps crash your whole server). Attackers can use this to their advantage and cause a Denial of Service on the servers. 

## Remediation
Upgrade `websocket-driver` to version 0.3.1 or higher.


## References
- [GitHub PR](https://github.com/faye/websocket-driver-node/pull/2)
- [GitHub Issue](https://github.com/faye/faye-websocket-node/issues/26)
- [GitHub Commit](https://github.com/faye/websocket-driver-node/pull/2/commits/f15b331a3459d30800a8b9781da5e2a7b3982160)
