## Overview
[`dalek-browser-ie`](https://www.npmjs.com/package/dalek-browser-ie) is Internet Explorer bindings for DalekJS.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `dalek-browser-ie`.

## References
- [Vulnerable Code](https://github.com/dalekjs/dalek-browser-ie/blob/master/install.js#L23)
