## Overview
[`jikes`](https://www.npmjs.com/package/jikes) is web framework for beginners.

Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Disclosure Timeline
- May 21st, 2017 - Disclosed to package owner
- May 22nd, 2017 - Issue acknowledged by package owner.

## Remediation
There is no fix version for `jikes`.

## References
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/jikes)
