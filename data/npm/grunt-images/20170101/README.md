## Overview
[`grunt-images`](https://www.npmjs.com/package/grunt-images) is a grunt plugin for processing images.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `grunt-images`.

## References
- [Vulnerable Code](https://github.com/gcpantazis/grunt-images/blob/7652db9b272372d816925d7ff2a88c354e88c78c/scripts/install#L10)
