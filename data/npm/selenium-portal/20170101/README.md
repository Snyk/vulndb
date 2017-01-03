## Overview
[`selenium-portal`](https://www.npmjs.com/package/selenium-portal) is a Selenium Testing Framework

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `selenium-portal`.

## References
- [Vulnerable Code](https://github.com/selenium-portal/portal/blob/af77a3986f36c35397098934bdfa32307514db0a/bin/scripts/preinstall.sh#L6)
