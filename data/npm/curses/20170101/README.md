## Overview
[`curses`](https://www.npmjs.com/package/curses) is bindings for the native curses library, a full featured console IO library.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `curses`.

## References
- [Vulnerable Code](https://github.com/fresc81/node-curses/blob/26fb6849ed858db17c2ef084d87d3365cc64f015/source-urls.json#L1)
