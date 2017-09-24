## Overview
[`http_static_simple`](https://www.npmjs.com/package/http_static_simple) is a simple server for the weather.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `http_static_simple`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/http_static_simple)
