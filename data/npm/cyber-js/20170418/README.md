## Overview
[`cyber-js`](https://www.npmjs.com/package/cyber-js) is The Cyber JS lib.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Remediation
There is no fix version for `cyber-js`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/cyber-js)
