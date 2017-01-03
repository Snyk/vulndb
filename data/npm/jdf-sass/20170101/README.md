## Overview
[`jdf-sass`](https://www.npmjs.com/package/jdf-sass) is a fork from node-sass, jdf use only.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `jdf-sass`.

## References
- [Vulnerable Code](https://github.com/wshxbqq/jdf-sass/blob/master/scripts/install.js#L53)
