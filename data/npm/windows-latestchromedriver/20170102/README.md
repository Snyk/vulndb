## Overview
[`windows-latestchromedriver`](https://www.npmjs.com/package/windows-latestchromedriver) downloads the latest version of chromedriver.exe

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `windows-latestchromedriver`.

## References
- [Vulnerable Code](https://github.com/ISNIT0/Windows_LatestChromedriver/blob/master/download.js#L3)
