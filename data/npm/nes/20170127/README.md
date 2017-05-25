## Overview
[`nes`](https://www.npmjs.com/package/nes) adds native WebSocket support to [`hapi`](https://www.npmjs.com/package/hapi)-based application servers.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. An attacker may craft an invalid cookie header, causing the node server to crash.

**Note:** This issue occurs only when websocket authentication is set to `cookie`.

## Remediation
Upgrade `nes` to version 6.4.1 or higher.

## References
- [Github Issue](https://github.com/hapijs/nes/issues/171)
- [Github Commit](https://github.com/hapijs/nes/commit/249ba1755ed6977fbc208463c87364bf884ad655)
