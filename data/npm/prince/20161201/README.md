## Overview
[`prince`](https://www.npmjs.com/package/prince) is a Node API for executing XML/HTML to PDF renderer PrinceXML via prince CLI.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. The vulnerability is in the `/prince-npm.js` file, where it downloads a zip file over http. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `prince`.

## References
- [Vulnerable Code](https://github.com/rse/node-prince/blob/master/prince-npm.js)
