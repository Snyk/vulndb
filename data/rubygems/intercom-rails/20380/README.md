## Overview
[`intercom-rails`](https://rubygems.org/gems/intercom-rails) is a customer relationship management and messaging tool for web app owners.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing user account details (i.e. a users personal email).

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
There is no fix version for `intercom-rails`.

## References
- [Github PR](https://github.com/intercom/intercom-rails/pull/250)
