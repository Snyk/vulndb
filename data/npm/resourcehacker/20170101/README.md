## Overview
[`resourcehacker`](https://www.npmjs.com/package/resourcehacker) is a Node wrapper of Resource Hacker (windows executable resource editor).

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `resourcehacker`.

## References
- [Vulnerable Code](https://github.com/felicienfrancois/node-resourcehacker/blob/13f71e9e0c46788f6eff5a7e82b6fa11a0a3dde4/scripts/install.js#L4)
