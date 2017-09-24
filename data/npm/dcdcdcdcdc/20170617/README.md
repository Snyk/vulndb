## Overview
[`dcdcdcdcdc`](https://www.npmjs.com/package/dcdcdcdcdc) is an http server.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `dcdcdcdcdc`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/dcdcdcdcdc)
