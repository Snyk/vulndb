## Overview
[`phantomjs-cheniu`](https://www.npmjs.com/package/phantomjs-cheniu) is a Headless WebKit with JS API

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `phantomjs-cheniu`.

## References
- [Vulnerable Code](https://github.com/Medium/phantomjs/blob/ae83e7abf7c5551041812e234c7749ea412b7288/install.js#L264)
