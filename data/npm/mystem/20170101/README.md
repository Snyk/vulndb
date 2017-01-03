## Overview
[`mystem`](https://www.npmjs.com/package/mystem) is a Node.js wrapper for MyStem morphology text analyzer by Yandex.ru

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `msystem`.

## References
- [Vulnerable Code](https://github.com/olebedev/node-mystem/blob/4563fe30b1cd46cf00bde254ac71bfd1cdeccac6/package.json#L8)
