## Overview
[`gon`](https://rubygems.org/gems/gon) is if you need to send some data to your js files and you don't want to do this with long way trough views and parsing.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing user input.

+You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `gon` to version 4.1.1 or higher.

## References
- [GitHub Commit](https://github.com/gazay/gon/commit/51551f82f21b162c1a5d510f14519599f2da20a8)
