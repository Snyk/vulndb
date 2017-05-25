## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Open Redirect attacks. A malicious user can create a link containing double slashes, which are treated as HTTP calls, and redirect to a site of their choosing.

## Remediation
Upgrade `ghost` to version 0.10.0 or higher.

## References
- [GitHub PR](https://github.com/TryGhost/Ghost/pull/7247)
- [GitHub Commit](https://github.com/TryGhost/Ghost/commit/f546a5ce1d2dd7a018eeaf0413a23d71155f0869)
