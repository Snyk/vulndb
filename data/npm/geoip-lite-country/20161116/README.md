## Overview
[`geoip-lite-country`](https://www.npmjs.com/package/geoip-lite-country) is a stripped down version of geoip-lite, supporting only country lookup.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to version `1.1.4` or greater.

## References
- [Github Commit](https://github.com/arve0/node-geoip-country/commit/9228f2096a882b251f917deba5ae7ffa1a9b4ccc)
