## Overview
[`serc.js`](https://www.npmjs.com/package/serc.js) is a Selenium RC process wrapper

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `serc.js`.

## References
- [Vulnerable Code](https://github.com/nowk/serc.js/blob/5237d4955eb8bfed9fa42769d016d5b3596343da/scripts/install.js#L5)
