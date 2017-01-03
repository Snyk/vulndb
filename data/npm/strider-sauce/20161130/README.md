## Overview
[`strider-sauce`](https://www.npmjs.com/package/strider-sauce) is Sauce Labs / Selenium support for Strider.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version greater than `0.6.3`

## References
- [Github Commit](https://github.com/Strider-CD/strider-sauce/commit/5ff6d6593f89aee505b4e86958ab6f8898baa9eb)
