## Overview
[`nodeschnaps`](https://www.npmjs.com/package/nodeschnaps) is a NodeJS compatibility layer for Java (Rhino).

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `nodeschnaps`.

## References
- [Vulnerable Code](https://github.com/killmag10/nodeschnaps/blob/13166ad327c8b4ff75325eb069e2ecef77b9dac4/Makefile#L146)
