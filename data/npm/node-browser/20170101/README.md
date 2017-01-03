## Overview
[`node-browser`](https://www.npmjs.com/package/node-browser) is a wrapper webdriver by nodejs.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `node-browser`.

## References
- [Vulnerable Code](https://github.com/imsobear/node-browser/blob/master/build.js#L15)
