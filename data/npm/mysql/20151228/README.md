## Overview
[`mysql`](https://www.npmjs.com/package/mysql) is a node.js driver for mysql.
Affected versions of this package do not properly escape column identifiers with `mysql.escape()` and can result in SQL injection vulnerability.

## Remediation
Upgrade `mysql` to version >=v2.0.0-alpha8 or higher.

## References
- [Github Issue](https://github.com/mysqljs/mysql/issues/342)
- [Github Commit](https://github.com/felixge/node-mysql/commit/bc8f3df0694fa876d7858f9d56cb9a9696ef38fa)
