## Overview
[`bitty`](https://www.npmjs.com/package/bitty) is a live editing server.
All versions of the package do not properly prevent path traversal. A request like `/../../../../../../etc/passwd` would leak sensitive files and data from the server.

## Remediation
There is no fix version for `bitty`. The maintainer of the package plans to unpublish it from the npm registry.

## References
- [Github Issue](https://github.com/nodesecurity/nsp/issues/137)
