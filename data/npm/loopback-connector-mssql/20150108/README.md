## Overview
[`loopback-connector-mssql`](https://www.npmjs.com/package/loopback-connector-mssql) is Loopback Microsoft SQL Server Connector.
Affected versions of the package are vulnerable to SQL injection attacks. User-supplied inputs are not properly sanitized before using it in SQL queries. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade `loopback-connector-mssql` to version 1.3.0 or higher.

## References
- [Github Issue](https://github.com/strongloop/loopback/issues/983)
- [Github PR](https://github.com/strongloop/loopback-connector-mssql/pull/18)
- [Github Commit](https://github.com/strongloop/loopback-connector-mssql/commit/1440f3d29ba0628bf6d7e508670fb0ab1c52cb7c)
