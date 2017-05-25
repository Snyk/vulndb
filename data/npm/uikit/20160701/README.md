## Overview
[`uikit`](https://www.npmjs.com/package/uikit)is a lightweight and modular front-end framework for developing fast and powerful web interfaces.
Affected versions of the package are vulnerable to Regular Expression Denial of Service (DoS) due to using a hardcoded file from a vulnerable version of marked.

## Remediation
Upgrade `uikit` to version 2.26.4 or higher.

## References
- [Github Commit](https://github.com/uikit/uikit/commit/aabd2bf61615fdb25c729a836148aaa4549e9a8b)
