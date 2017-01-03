## Overview
[`limbus-buildgen`](https://www.npmjs.com/package/limbus-buildgen) is a "build anywhere" build system.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version `0.1.1` or greater.

## References
- [Github Commit](https://github.com/redien/limbus-buildgen/commit/dfdcf27117f7ed03560054952c90b9d78c121329)
