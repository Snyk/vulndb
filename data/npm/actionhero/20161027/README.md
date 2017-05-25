## Overview
[`actionhero`](https://www.npmjs.com/package/actionhero) is a multi-transport API Server with integrated cluster capabilities and delayed tasks.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks. An attacker can request a file name which includes HTML characters that are not escaped in the response.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `actionhero` to version 15.1.2 or higher.

## References
- [GitHub PR #1](https://github.com/actionhero/actionhero/pull/972)
- [GitHub PR #2](https://github.com/actionhero/actionhero/pull/971)
- [GitHub Commit](https://github.com/actionhero/actionhero/commit/f9f5d92f7c50a6dad38f558bd0a207b18e3580c1)
