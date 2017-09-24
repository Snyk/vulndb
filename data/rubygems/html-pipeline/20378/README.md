## Overview
[`html-pipeline`](https://rubygems.org/gems/html-pipeline) is a GitHub HTML processing filters and utilities.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The default settings for the `SanitizationFilter` class was whitelisting `list` and `table` child elements living outside of their containers (li, tr, td, th).

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `html-pipeline` to version 0.0.5 or higher.

## References
- [Github PR](https://github.com/jch/html-pipeline/pull/31)
- [Github Commit](https://github.com/jch/html-pipeline/commit/0b75ccbe5bcc481529d80a27f812ef5d64755b26)
