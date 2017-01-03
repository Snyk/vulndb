## Overview
[`iedriver`](https://www.npmjs.com/package/iedriver) is an NPM wrapper for Selenium IEDriver.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to iedriver version `3.0.0` or greater.

## References
- [Github Commit](https://github.com/barretts/node-iedriver/commit/32ca1602573618c8d76182c4f2a30aee379d6629)
