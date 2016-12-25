## Overview
[`ibapi`](https://www.npmjs.com/package/ibapi) is an Interactive Brokers API addon for NodeJS.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `ibapi`.

## References
- [Gitlord Code](https://gitlord.com/summary/~dchem%2Fnode-ibapi-addon.git)
