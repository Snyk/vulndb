## Overview
[`rethinkdb`](https://www.npmjs.com/package/rethinkdb) provides the JavaScript driver library for the RethinkDB database server for use in your node application.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to using a non-cryptographic hash map to store connection IDs, making it possible to easily guess the connection ID. Attackers can use this ID to run queries on the connection setup.

## Remediation
Upgrade `rethinkdb` to version 2.1.0 or higher.

## References
- [GitHub Commit](https://github.com/rethinkdb/rethinkdb/commit/439f0fa2224adc53a094c857f391c618a2526aa7)
