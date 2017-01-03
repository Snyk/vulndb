## Overview
[`windows-seleniumjar-mirror`](https://www.npmjs.com/package/windows-seleniumjar-mirror) downloads the Selenium Jar file.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `windows-seleniumjar-mirror`.
