## Overview
[`mysql`](https://www.npmjs.com/package/mysql) is a node.js driver for mysql.
Affected versions of this package do not validate that the remote server has a trusted SSL certificate or not, making it easier for attackers to gain access to the MySQL Server.

## Remediation
Upgrade `mysql` to version 2.3.0 or higher.

## References
- [Github Issue](https://github.com/mysqljs/mysql/issues/816)
- [Github Commit]( https://github.com/mysqljs/mysql/commit/f03bf567ba64008c09a773858338c01842ed76db)
