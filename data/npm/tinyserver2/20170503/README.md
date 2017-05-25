## Overview
[`tinyserver2`](https://www.npmjs.com/package/tinyserver2) is Tiny webserver for local content.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Remediation
Upgrade `tinyserver2` to version 0.6.1 or higher.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/tinyserver2)
