## Overview
[`hftp`](https://www.npmjs.com/package/hftp) is a simple static http or ftp server..

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Remediation
There is no fix version for `hftp`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/hftp)
