## Overview
[`intercom-rails`](https://rubygems.org/gems/intercom-rails) is a customer relationship management and messaging tool for web app owners.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing user account details(i.e. a users personal email).

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `intercom-rails` to version 0.2.14 or higher.

## References
- [Github Commit](https://github.com/intercom/intercom-rails/commit/83baa40d21b217caf52db57a2a0616a030ec8f38)
