## Overview
[`mystem3`](https://www.npmjs.com/package/mystem3) is a NodeJS wrapper for the Yandex MyStem 3.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `mystem3`.

## References
- [Vulnerable Code](https://github.com/koorchik/node-mystem3/blob/f91f70b40de9f49bb4225f51bd2c706663d99485/bin/download-mystem.js#L11)
