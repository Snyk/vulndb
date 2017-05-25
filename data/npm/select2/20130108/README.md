## Overview
[`select2`](https://www.npmjs.com/package/select2) is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
 The `escapeMarkup` function escaped only &, and not html tags, quotes or slashes.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `select2` to version 3.3.0 or higher.

## References
- [GitHub PR #1](https://github.com/select2/select2/pull/691)
- [GitHub PR #2](https://github.com/select2/select2/pull/703)
- [GitHub Commit #1](https://github.com/select2/select2/commit/353672832dc8d0e4abed7ec14db6d82c83e17045)
- [GitHub Commit #2](https://github.com/select2/select2/commit/fcea1523fddbf678dc482c00b7df5997527f8d33)
- [GitHub Commit #2](https://github.com/select2/select2/compare/5f2828098e6e98f33efe6db39555c4708e5a7240...fcea1523fddbf678dc482c00b7df5997527f8d33)
