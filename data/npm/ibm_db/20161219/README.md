## Overview
[`ibm_db`](https://www.npmjs.com/package/ibm_db) is a package for IBM DB2 and IBM Informix bindings for node.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

## Remediation
Upgrade `ibm_db` to version 1.0.2 or higher.

## References
- [GitHub Issue](https://github.com/ibmdb/node-ibm_db/issues/208)
- [GitHub Commit](https://github.com/ibmdb/node-ibm_db/commit/d7e2d4b4cbeb6f067df8bba7d0b2ac5d40fcfc19#diff-315091eb1586966006e05ebc21cd2a94)
