## Overview
[`apk-parser2`](https://www.npmjs.com/package/apk-parser2) is a module which extracts Android Manifest info from an APK file.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `apk-parser2`.

## References
- [Vulnerable Code](https://github.com/gergelyke/node-apk-parser2/blob/master/install.js#L23)
