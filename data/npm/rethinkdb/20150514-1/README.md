## Overview
[`rethinkdb`](https://www.npmjs.com/package/rethinkdb) provides the JavaScript driver library for the RethinkDB database server for use in your node application.
Affected versions of the package use a non-cryptographic hash map to store connection IDs, making the connection ID easy to guess.

## Remediation
Upgrade `rethinkdb` to version 2.1.0 or higher.

## References
- [Github Commit](https://github.com/rethinkdb/rethinkdb/commit/439f0fa2224adc53a094c857f391c618a2526aa7)
