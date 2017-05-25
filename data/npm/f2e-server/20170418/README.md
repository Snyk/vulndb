## Overview
[`f2e-server`](https://www.npmjs.com/package/f2e-server) is f2e-server 2.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leak.

## Remediation
Upgrade `f2e-server` to version 1.12.13 or higher.

## References
- [Github PR](https://github.com/shy2850/node-server/issues/10)
- [Github Issue](https://github.com/shy2850/node-server/pull/11)
