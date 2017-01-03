## Overview
[`selenium-chromedriver`](https://www.npmjs.com/package/selenium-chromedriver) is a simple utility for downloading the Selenium Webdriver for Google Chrome.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `selenium-chromedriver`.

## References
- [Vulnerable Code](https://github.com/jugglinmike/selenium-chromedriver/blob/985816c137ce6d4ae16f4d6721c89ba2d6e2344f/install/index.js#L93)
