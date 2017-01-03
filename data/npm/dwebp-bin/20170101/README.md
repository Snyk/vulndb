## Overview
[`dwebp-bin`](https://www.npmjs.com/package/dwebp-bin) is a dwebp node.js wrapper that convert WebP into PNG.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `dwebp-bin`.

## References
- [Vulnerable Code](https://github.com/1000ch/node-dwebp-bin/blob/8eb8698acb9b8962864ed0ec1629dfddc2ed8fcc/lib/install.js#L12)
