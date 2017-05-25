## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) because it fails to securely handle user data, making it possible for an attacker to supply crafted input in order to harm third party users.

## Remediation
Upgrade `ghost` to version 0.11.4 or higher.

## References
- [Seclist](http://seclists.org/fulldisclosure/2017/Jan/49)
- [GitHub PR](https://github.com/TryGhost/Ghost/pull/7833)
- [GitHub Issue](https://github.com/TryGhost/Ghost/issues/7832)
- [GitHub Commit](https://github.com/TryGhost/Ghost/commit/32b9fc71a7f1400acff1f2446167b6c852769843)
