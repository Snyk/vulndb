## Overview
`restafary` versions prior to 1.6.1 did not properly prevent path traversal, allowing access to sensitive files and data on the server. For example, requesting the following url `/api/v1/fs/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

## Remediation
Upgrade to version 1.6.1 or greater.

## References
- https://github.com/coderaiser/node-restafary/commit/63e4b13c802991bbff2d0af8bd15b0bce9ff971a