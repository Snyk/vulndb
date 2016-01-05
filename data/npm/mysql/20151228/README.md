## Overview
Column identifiers are not properly escaped with `mysql.escape()` and can result in SQL injection vulnerability.

## References
- https://nodesecurity.io/advisories/66
- https://github.com/felixge/node-mysql/issues/342
- https://github.com/felixge/node-mysql/commit/bc8f3df0694fa876d7858f9d56cb9a9696ef38fa