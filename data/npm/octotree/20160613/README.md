## Overview
[`octotree`](https://www.npmjs.com/package/octotree) Display GitHub code in a tree format.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the branch name, which may contain script.

## Remediation
Upgrade `octotree` to version 2.0.11 or higher.

## References
- [GitHub Issue](https://github.com/buunguyen/octotree/issues/299)
- [GitHub ChangeLog](https://github.com/buunguyen/octotree/blob/master/HISTORY.md#v2011)
- [GitHub Commit](https://github.com/buunguyen/octotree/commit/3bf37eac209c1fc0d3d6a70417e316d86612b426)
