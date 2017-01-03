## Overview
[`alto-saxophone`](https://www.npmjs.com/package/alto-saxophone) is a module to install and launch Chromedriver for Mac, Linux or Windows.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version `2.25.1` or higher.

## References
- [Github Issue](https://github.com/tobli/alto-saxophone/issues/3)
- [Github PR](https://github.com/tobli/alto-saxophone/pull/4)
- [Github Commit](https://github.com/tobli/alto-saxophone/commit/8cb735e8194fa3aac47727cda5ba0a876adc4e45)
