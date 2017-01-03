## Overview
[`loopback-connector-postgresql`](https://www.npmjs.com/package/loopback-connector-postgresql) is Loopback PostgreSQL Connector.
Affected versions of the package are vulnerable to SQL injection attacks. User-supplied inputs are not properly sanitized before using it in SQL queries. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade `loopback-connector-postgresql` to version 1.3.0 or higher.

## References
- [Github Issue](https://github.com/strongloop/loopback/issues/983)
- [Github PR](https://github.com/strongloop/loopback-connector-postgresql/pull/49)
- [Github Commit](https://github.com/strongloop/loopback-connector-postgresql/commit/384bbfc3aa0d74f6d0d92a76caf4bd3ca926d626)
