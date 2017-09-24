## Overview
[`rails_autolink`](https://rubygems.org/gems/rails_autolink) is an extraction of the `auto_link` method from rails.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks due to not properly sanitizing user input.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `rails_autolink` to version 1.1.2 or higher.

## References
- [Github PR](https://github.com/tenderlove/rails_autolink/pull/14)
- [Github Issue](https://github.com/tenderlove/rails_autolink/issues/13)
- [Github Commit](https://github.com/tenderlove/rails_autolink/commit/20247e23742f3ab09c5c5d5958ff18d4adb775c7)
