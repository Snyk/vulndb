## Overview
[`google-closure-tools-latest`](https://www.npmjs.com/package/google-closure-tools-latest) is a Node.js module wrapper for downloading the latest version of the Google Closure tools

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `google-closure-tools-latest`.

## References
- [Vulnerable Code](https://github.com/vsonix-bub/node-google-closure-tools-latest/blob/master/install.js#L6)
