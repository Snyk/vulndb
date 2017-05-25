## Overview
[`sails`](https://www.npmjs.com/package/sails) is API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io).
Affected versions of the package are vulnerable to a Denial of Service (DoS) attack by sending an OPTIONS request for an undefined route, emitted on the socket.io REST interface. This causes `sails` to become unresponsive.

## Remediation
Upgrade `sails` to version 0.12.0-rc4 or higher.

## References
- https://github.com/balderdashy/sails
- https://github.com/balderdashy/sails/commit/252b7b8c68d393acdde597c8b187945c629e4f6a
