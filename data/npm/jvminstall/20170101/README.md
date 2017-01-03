## Overview
[`jvminstall`](https://www.npmjs.com/package/jvminstall) is a module for downloading and unpacking jvm to local system.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `jvminstall`.

## References
- [Vulnerable Code](http://git.javadeploy.net/Titan/jvmInstall/blob/420f4684e7d65d4a46b152fb7c0465e382cf77ba/app/downloadingPackage.js#L35)
