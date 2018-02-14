## Overview
[`rinku`](https://rubygems.org/gems/rinku) is a fast and very smart autolinking library that
acts as a drop-in replacement for Rails `auto_link`.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not escaping double quotes in a valid url.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `rinku` to version 1.5.1 or higher.

## References
- [GitHub Commit](https://github.com/vmg/rinku/commit/a63ddc94bc0eedb32d6b56ef22a337181c4add62)
