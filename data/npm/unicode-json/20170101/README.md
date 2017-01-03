## Overview
[`unicode-json`](https://www.npmjs.com/package/unicode-json) is a unicode lookup table.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received.

## Remediation
There is no fix version for `unicode-json`.

## References
- [Vulnerable Code](https://github.com/Zertz/unicode-json/blob/master/install.js#L34)
