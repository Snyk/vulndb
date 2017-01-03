## Overview
[`js-given`](https://www.npmjs.com/package/js-given) is a JavaScript frontend to jgiven.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `js-given`.

## References
- [Vulnerable Code](https://github.com/jsGiven/jsGiven/blob/eafa17168be50b7369facbfd468fae599318bccf/js-given/tools/installJGivenReport.js#L8)
