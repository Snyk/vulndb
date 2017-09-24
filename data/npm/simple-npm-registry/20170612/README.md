## Overview
[`simple-npm-registry`](https://www.npmjs.com/package/simple-npm-registry) implements an npm registry which forwards requests to `registry.npmjs.org`.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

## Remediation
There is no fix version for `simple-npm-registry`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/simple-npm-registry)
