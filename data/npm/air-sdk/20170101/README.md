## Overview
[`air-sdk`](https://www.npmjs.com/package/air-sdk) is a NPM wrapper for the Adobe AIR SDK.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `air-sdk`.

## References
- [Github Repo](https://github.com/dayvson/air-sdk)
- [Vulnerable Code](https://github.com/dayvson/air-sdk/blob/5a8066059ad6fc00b6a0693901146530c7143898/package.json#L28)
