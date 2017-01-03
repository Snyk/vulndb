## Overview
[`install-nw`](https://www.npmjs.com/package/install-nw) is a module which quickly and robustly installs and caches NW.js.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version `1.1.5` or greater.

## References
- [Github Commit](https://github.com/davidmarkclements/install-nw/commit/5c64eff1ed116fceeba55a51867554f0fe4f6556)
