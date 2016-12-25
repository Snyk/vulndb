## Overview
[`jser-stat`](https://www.npmjs.com/package/jser-stat) is a JSer.info stat library.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received.

## Remediation
There is no fix version for `jser-stat`.

## References
- [Vulnerable Code](https://github.com/jser/stat-js/blob/master/data/url-mapping.js)
