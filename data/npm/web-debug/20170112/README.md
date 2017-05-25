## Overview
[`web-debug`](https://www.npmjs.com/package/web-debug) is a static web server with liveload for web development.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `web-debug`.

## References
- [Github Issue](https://github.com/lwdgit/web-debug/issues/1)
