## Overview
[`selenium-standalone-painful`](https://www.npmjs.com/package/selenium-standalone-painful) installs a start-selenium command line to start a standalone selenium server with chrome-driver.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `selenium-standalone-painful`.

## References
- [Vulnerable Code](https://github.com/bevacqua/selenium-standalone-painful/blob/15e50489d2279f8bccbac11050df34dc97fefe8d/install.js#L54)
