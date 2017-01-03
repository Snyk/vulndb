## Overview
[`httpsync`](https://www.npmjs.com/package/httpsync) is a port of libcurl to node.js.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `httpsync`. 

## References
- [Vulnerable Code](https://github.com/fengmk2/node-curl/blob/0.0.8/build.sh#L4)
