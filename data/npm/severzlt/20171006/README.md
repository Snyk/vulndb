## Overview
Affected versions of [`severzlt`](https://www.npmjs.com/package/severzlt)  are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `severzlt`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/severzlt)
