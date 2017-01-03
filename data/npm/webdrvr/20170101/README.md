## Overview
[`webdrvr`](https://www.npmjs.com/package/webdrvr) is a npm wrapper for Selenium Webdriver including Chromedriver / IEDriver / IOSDriver / Ghostdriver.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `webdrvr`.

## References
- [Vulnerable Code](https://github.com/uxebu/webdrvr/blob/master/test/integration-spec.js#L43)
