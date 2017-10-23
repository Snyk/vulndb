## Overview
Affected versions of [`nodeserver-jta`](https://www.npmjs.com/package/nodeserver-jta)  are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `nodeserver-jta`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/nodeserver-jta)
