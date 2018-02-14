## Overview
[`next`](https://www.npmjs.com/package/next) is Minimalistic framework for server-rendered React applications.
Affected versions of the package are vulnerable to Directory Traversal via the /\_next and /static request namespaces. An attacker can craft a request that may potentially access sensitive information in the server filesystem.

## Remediation
Upgrade `next` to version 2.4.1 or higher.

## References
- [Zeit Vulnerability Advisory](https://send-patch.now.sh/)
- [GitHub Release Notes](https://github.com/zeit/next.js/releases/tag/2.4.1)
- [GitHub Commit](https://github.com/zeit/next.js/commit/02fe7cf63f6265d73bdaf8bc50a4f2fb539dcd00)
