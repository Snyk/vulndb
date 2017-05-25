## Overview
[`node-simple-router`](https://www.npmjs.com/package/node-simple-router) is Yet another minimalistic router for node.js.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Disclosure Timeline
- June 6th, 2017 - Disclosed to package owner
- June 6th, 2017 - Issue acknowledged by package owner.

## Remediation
There is no fix version for `node-simple-router`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/node-simple-router)
