## Overview
[`fis-parser-sass-bin`](https://www.npmjs.com/package/fis-parser-sass-bin) a plugin for fis to compile sass using node-sass-binaries.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `fis-parser-sass-bin`.

## References
- [Vulnerable Code](https://github.com/fis-stuff/fis-parser-sass-bin/blob/master/scripts/install.js#L53)
