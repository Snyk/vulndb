## Overview
[`mystem3`](https://www.npmjs.com/package/mystem3) is a NodeJS wrapper for the Yandex MyStem 3.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Upgrade `mystem3` to version 1.0.8 or higher.

## References
- [GitHub Commit](https://github.com/koorchik/node-mystem3/commit/4bd31c0e0110afc327c414d7ebfc2ffe738cbad2)
