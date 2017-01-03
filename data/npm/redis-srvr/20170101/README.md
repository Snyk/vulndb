## Overview
[`redis-srvr`](https://www.npmjs.com/package/redis-srvr) is an npm wrapper for redis-server.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `redis-srvr`.

## References
- [Vulnerable Code](https://github.com/lennym/redis-srvr/blob/master/install.sh#L1)
