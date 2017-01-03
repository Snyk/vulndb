## Overview
[`cmake`](https://www.npmjs.com/package/cmake) installs the cmake x86 linux binaries.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `cmake`.

## References
- [Vulnerable Code](https://github.com/stanleygu/cmake/blob/master/Makefile#L2)
