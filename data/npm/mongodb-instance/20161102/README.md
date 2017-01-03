## Overview
[`mongodb-instance`](https://www.npmjs.com/package/mongodb-instance) installs mongodb locally.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version `0.0.3` or later.

## References
- [Github Commit](https://github.com/Janpot/mongodb-instance/commit/c8fea750f8020ace8410c442b2684b33a9fddd3b)
