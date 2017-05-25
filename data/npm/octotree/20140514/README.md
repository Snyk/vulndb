## Overview
[`octotree`](https://www.npmjs.com/package/octotree) Display GitHub code in tree format.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The filenames are added to jsTree without sanitization. jsTree will render HTML passed as a tree node's text, potentially compromising the GitHub tokens stored in local storage and allowing an attacker to access GitHub sessions.

## Remediation
Upgrade `octotree` to version 1.0.0 or higher.

## References
- [GitHub Issue](https://github.com/buunguyen/octotree/issues/9)
- [GitHub ChangeLog](https://github.com/buunguyen/octotree/blob/master/HISTORY.md#v11)
- [GitHub Commit](https://github.com/buunguyen/octotree/commit/a1e8a63ca894d4ecc58ba722727ca8b3c1a2128d)
