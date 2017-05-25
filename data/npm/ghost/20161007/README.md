## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the subscribe url. If an attacker set the location parameter to `javascript:alert(0)`, javascript will executed in the users browser when pressing the back button.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `ghost` to version 1.0.0-alpha.5 or higher.

## References
- [GitHub PR #1](https://github.com/TryGhost/Ghost/pull/7520)
- [GitHub PR - 0.11.2](https://github.com/TryGhost/Ghost/pull/7539)
- [GitHub PR - 1.0.0](https://github.com/TryGhost/Ghost/pull/7540)
- [GitHub Commit](https://github.com/TryGhost/Ghost/commit/03e4acdb374ce5067ce630b40f95743ca3e1ef21)
