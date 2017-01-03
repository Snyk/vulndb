## Overview
[`qbs`](https://www.npmjs.com/package/qbs) is a build tool that helps simplify the build process for developing projects across multiple platforms.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `qbs`.
