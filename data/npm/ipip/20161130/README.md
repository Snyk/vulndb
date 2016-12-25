## Overview
[`ipip`](https://www.npmjs.com/package/ipip) queries geolocation information based on IP.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. The vulnerability is in the `/install.js` file, where it downloads a zip file over http. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `ipip`. This package is unmaintained and the author recommends using the [official package](https://github.com/17mon/nodejs).

## References
- [Vulnerable Code](https://github.com/ChiChou/node-ipip/blob/temp/install.js#L10)
