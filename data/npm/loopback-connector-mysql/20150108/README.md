## Overview
[`loopback-connector-mysql`](https://www.npmjs.com/package/loopback-connector-mysql) is Loopback Oracle Connector.
Affected versions of the package are vulnerable to SQL injection attacks. User-supplied inputs are not properly sanitized before using it in SQL queries. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade `loopback-connector-mysql` to version 1.5.0 or higher.

## References
- [Github Issue](https://github.com/strongloop/loopback/issues/983)
- [Github PR](https://github.com/strongloop/loopback-connector-mysql/pull/67)
- [Github Commit](https://github.com/strongloop/loopback-connector-mysql/commit/8f1b5a3de23ef1b5ada5f40547b7a2f278d6ece6)
