## Overview
[`loopback-connector-oracle`](https://www.npmjs.com/package/loopback-connector-oracle) is Loopback Oracle Connector.
Affected versions of the package are vulnerable to SQL injection attacks. User-supplied inputs are not properly sanitized before using it in SQL queries. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade `loopback-connector-oracle` to version 1.5.0 or higher.

## References
- [Github Issue](https://github.com/strongloop/loopback/issues/983)
- [Github PR](https://github.com/strongloop/loopback-connector-oracle/pull/28)
- [Github Commit](https://github.com/strongloop/loopback-connector-oracle/commit/29128e79000382011fc30c2aec98a24b0668273e)
