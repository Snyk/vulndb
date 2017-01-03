## Overview
[`mystem-wrapper`](https://www.npmjs.com/package/mystem-wrapper) is a Yandex mystem app wrapper module.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `mystem-wrapper`.

## References
- [Vulnerable Code](https://github.com/titarenko/mystem-wrapper/blob/0fd6872c01c8f206dc7e566c3214d5c2e5d2e20f/bin/install-mystem.js#L13)
