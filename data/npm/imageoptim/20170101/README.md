## Overview
[`imageoptim`](https://www.npmjs.com/package/imageoptim) is a Node.js wrapper for some images compression algorithms.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `imageoptim`.

## References
- [Vulnerable Code](https://github.com/bem-archive/image-optim/blob/aaac321cf4000495ac52214833a905fd4d7ee9e5/env/env-setup#L23)
