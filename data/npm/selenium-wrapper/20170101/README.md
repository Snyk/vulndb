## Overview
[`selenium-wrapper`](https://www.npmjs.com/package/selenium-wrapper) is a selenium server wrapper, including installation and chrome webdriver.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `selenium-wrapper`.

## References
- [Vulnerable Code](https://github.com/arian/selenium-wrapper/blob/0b6d75021f54c1dd2a1be8c227e37b8c237723d0/install.js#L11)
