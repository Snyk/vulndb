## Overview
A bug in `node-uuid` prior to 1.4.4 caused it to use the cryptographically insecure `Math.random` which can produce predictable values and should not be used in security-sensitive context.

## Remediation
Upgrade to version 1.4.4 or greater.

## References
- https://github.com/broofa/node-uuid/issues/108
- https://github.com/broofa/node-uuid/issues/122

