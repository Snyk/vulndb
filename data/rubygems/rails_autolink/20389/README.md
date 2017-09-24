## Overview
[`rails_autolink`](https://rubygems.org/gems/rails_autolink) is an extraction of the `auto_link` method from rails.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks via link attributes.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/),

## Remediation
Upgrade `rails_autolink` to version 1.1.6 or higher.

## References
- [Github PR](https://github.com/tenderlove/rails_autolink/pull/47)
- [Github Commit](https://github.com/tenderlove/rails_autolink/commit/13579a773cb2ae1287d797eed8e842ba68d2a97f)
