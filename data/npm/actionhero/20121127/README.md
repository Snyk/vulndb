## Overview
[`actionhero`](https://www.npmjs.com/package/actionhero) is a multi-transport API Server with integrated cluster capabilities and delayed tasks.
Affected versions of the package are vulnerable to Directory Traversal attacks.
`actionhero` would reference and send files from private directories, allowing an attacker to possibly retrieve information from these restricted private directories.

## Remediation
Upgrade `actionhero` to version 4.0.0 or higher.

## References
- [GitHub PR](https://github.com/actionhero/actionhero/pull/51)
- [GitHub Commit](https://github.com/actionhero/actionhero/commit/76e7429633de6df5078f2d3f0e2550bc755d7bb1)
