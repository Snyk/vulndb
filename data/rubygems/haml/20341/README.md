## Overview
[`haml`](https://rubygems.org/gems/haml) is a layer on top of HTML or XML that's designed to express the structure of documents in an elegant way.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). Parameter hashes are not properly encoded when a specific key isn't used.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `haml` to version v5.0.0.beta.2 or higher.

## References
- [GitHub PR](https://github.com/haml/haml/pull/905)
- [GitHub Issue](https://github.com/haml/haml/issues/891)
- [GitHub Commit](https://github.com/haml/haml/commit/e05ba9ff2bfb65e2e454d53ff88e614c77379769)
