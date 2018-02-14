## Overview
[`shiba`](https://www.npmjs.com/package/shiba) is a rich live markdown preview app with linter.

Affected versions of this package are vulnerable to a Cross-site Scripting (XSS) attack which can lead to code execution due to an enabled node integration.

## Remediation
Upgrade to `shiba` version 1.1.1 or higher.

## References
- [GitHub Issue](https://github.com/rhysd/Shiba/issues/42)
- [GitHub Commit](https://github.com/rhysd/Shiba/commit/e8a65b0f81eb04903eedd29500d7e1bedf249eab)
