## Overview
[`node-uuid`](https://www.npmjs.com/package/node-uuid) is a rigorous implementation of RFC4122 (v1 and v4) UUIDs.
Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. While padding strings to zero out excess bytes, the pointer was not properly incremented.

## Remediation
Upgrade `node-uuid` to version 1.3.1 or higher.

## References
- https://github.com/broofa/node-uuid/commit/499574c84bc660b52c4322a011abfdd3edfd28bf
