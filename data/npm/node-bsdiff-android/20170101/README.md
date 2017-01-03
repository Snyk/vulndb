## Overview
[`node-bsdiff-android`](https://www.npmjs.com/package/node-bsdiff-android) is a bsdiff APK file.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `node-bsdiff-android`.

## References
- [Vulnerable Code](https://github.com/arthur-zhang/node-bsdiff-android/blob/master/install.js#L14)
