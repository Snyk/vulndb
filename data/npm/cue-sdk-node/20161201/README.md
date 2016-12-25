## Overview
[`cue-sdk-node`](https://www.npmjs.com/package/cue-sdk-node) is a Corsair Cue SDK wrapper for node.js.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. The vulnerability is in the `/getdll.js` file, where it downloads a zip file over http. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `cue-sdk-node`.

## References
- [Vulnerable Code](https://github.com/Yannicked/node-cue-sdk/blob/master/getdll.js#L6)
