## Overview
[`serve-here`](https://www.npmjs.com/package/serve-here) is local static server.

Affected versions of the package are vulnerable to Directory Traversal. A crafted request can be used to traverse the directory structure of a host using the `serve-here` package, and request arbitrary files outside of the specified web root.

## Remediation
A fix for this vulnerability has been pushed to the master branch but not yet published on npm as of Jan 12th, 2018. 

## References
- [GitHub PR](https://github.com/vivaxy/here/pull/17)
- [GitHub Issue](https://github.com/vivaxy/here/issues/16)
- [GitHub Commit](https://github.com/vivaxy/here/commit/298dbab41344dfb7f95f66b1fa7b5cfb436bd4a2)
- [Hackerone Report](https://hackerone.com/reports/296254)