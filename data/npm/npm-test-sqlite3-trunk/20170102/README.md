## Overview
[`npm-test-sqlite3-trunk`](https://www.npmjs.com/package/npm-test-sqlite3-trunk)
The npm-test-sqlite3-trunk module provides asynchronous, non-blocking SQLite3 bindings

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `npm-test-sqlite3-trunk`.

## References
- [Vulnerable Code](https://github.com/mapbox/node-sqlite3/blob/7322ea714b13451bab75d5232a1dd2a05fcb5052/scripts/build_for_node_webkit.cmd#L8)
