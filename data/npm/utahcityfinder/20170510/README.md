## Overview
[`utahcityfinder`](https://www.npmjs.com/package/utahcityfinder) is Constructs a list of Utah cities with a certain prefix.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Remediation
There is no fix version for `utahcityfinder`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/utahcityfinder)
