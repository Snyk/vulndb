## Overview
The `console-io` package allows users to have a web console in their application. 

Versions prior to 2.3.0 did not require authentication for socket.io, thus allowing attackers to send and execute shell commands over a websocket.

## Remediation
Upgrade `console-io` to version 2.3.0 or higher.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://github.com/cloudcmd/console/compare/v2.2.13...v2.3.0
- https://github.com/cloudcmd/console/commit/62f0fbcb36226436af0dad52ffe4d8cd9a0c533f
