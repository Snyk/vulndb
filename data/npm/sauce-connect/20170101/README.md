## Overview
[`sauce-connect`](https://www.npmjs.com/package/sauce-connect) is a Node.js wrapper over the SauceLabs SauceConnect.jar program for establishing a secure tunnel for intranet testing.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `sauce-connect`.

## References
- [Github Repo](https://github.com/ddopson/node-sauce-connect)
