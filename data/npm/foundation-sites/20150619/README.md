## Overview
[`foundation-sites`](https://www.npmjs.com/package/foundation-sites) is an advanced responsive front-end framework.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to using `innerHTML` without sanitizing user input.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `foundation-sites` to version 5.5.3 or higher.

## References
- [GitHub PR](https://github.com/zurb/foundation-sites/pull/6640)
- [GitHub Issue](https://github.com/zurb/foundation-sites/issues/6639)
- [GitHub Commit](https://github.com/zurb/foundation-sites/commit/bf57af9429fbe5e4b18e32e951504136df996e10)
