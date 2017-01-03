## Overview
[`massif`](https://www.npmjs.com/package/massif) is a Phantomjs fork.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `massif`.

## References
- [Vulnerable Code](https://github.com/gaelb/massif/blob/master/install.js#L23)
