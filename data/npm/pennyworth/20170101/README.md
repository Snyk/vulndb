## Overview
[`pennyworth`](https://www.npmjs.com/package/pennyworth) is a natural language templating engine.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `pennyworth`.

## References
- [Vulnerable Code](https://github.com/karimsa/pennyworth/blob/5b2fc2f9d2a944637d874557de2392c390ba385d/package.json#L20)
