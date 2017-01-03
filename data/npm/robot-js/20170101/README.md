## Overview
[`robot-js`](https://www.npmjs.com/package/robot-js) is a module for native system automation for node.js.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `robot-js`.

## References
- [Vulnerable Code](https://github.com/Robot/robot-js/blob/84db11e72404977efb270b1185c2a8d1fcb81016/Native/Install.js#L23)
