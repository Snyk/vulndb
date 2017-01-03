## Overview
[`mystem-fix`](https://www.npmjs.com/package/mystem-fix) is a node.js wrapper for MyStem morphology text analyzer by Yandex.ru

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `mystem-fix`.

## References
- [Vulnerable Code](https://github.com/pulpiks/node-mystem/blob/master/package.json#L8)
