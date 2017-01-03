## Overview
[`openframe-ascii-image`](https://www.npmjs.com/package/openframe-ascii-image) module is an openframe plugin which adds support for ascii images via fim.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `openframe-ascii-image`.
