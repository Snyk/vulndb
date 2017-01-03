## Overview
[`box2d-native`](https://www.npmjs.com/package/box2d-native) is a native Node.js addon for Box2D v2.3.1.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `box2d-native`.

## References
- [Vulnerable Code](https://github.com/zuker/box2d-native/blob/0727a747c30d51ae00369281acf43e0933940bb1/package.json#L15)
