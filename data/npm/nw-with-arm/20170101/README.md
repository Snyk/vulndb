## Overview
[`nw-with-arm`](https://www.npmjs.com/package/nw-with-arm) is a NW Installer including ARM-Build.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `nw-with-arm`.

## References
- [Vulnerable Code](https://github.com/toni89/nw-with-arm/blob/f8cef4d3816bd3388ad0ad8c3e57009fb0afbf79/scripts/install.js#L38)
