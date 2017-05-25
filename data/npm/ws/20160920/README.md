## Overview
[`ws`](https://www.npmjs.com/package/ws) is a simple to use websocket client, server and console for node.js.

Affected versions of the package use the cryptographically insecure `Math.random` which can produce predictable values and should not be used in security-sensitive context.

## Remediation
Upgrade `ws` to version 1.1.2 or higher.

## References
- [Github PR](https://github.com/websockets/ws/pull/832)
- [Github Commit](https://github.com/websockets/ws/commit/7253f06f5432c76f3e82e2c055fcea08b612d8b2)
- [Mike Malone's Blog](https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.6wcldperq)
