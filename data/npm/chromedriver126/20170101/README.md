## Overview
[`chromedriver126`](https://www.npmjs.com/package/chromedriver126) is chromedriver version 1.26 for linux OS.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `chromedriver126`.

## References
- [Vulnerable Code](https://github.com/swangful/chromedriver126/blob/master/install.js#L17)
