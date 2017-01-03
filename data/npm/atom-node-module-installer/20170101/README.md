## Overview
[`atom-node-module-installer`](https://www.npmjs.com/package/atom-node-module-installer) installs node modules for atom-shell applications.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `atom-node-module-installer`.

## References
- [Vulnerable Code](https://github.com/probablycorey/atom-node-module-installer/blob/f6fc822c2d491e818646b7e8d0558a0215e8a2fa/src/download-node.coffee#L41)
