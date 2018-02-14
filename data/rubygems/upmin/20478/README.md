## Overview
[`upmin`](https://rubygems.org/gems/upmin) is Customizable admin dashbaords generated with only a few lines of code.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF). The anti-CSRF protection `protect_from_forgery` is off by default in `Rails ActionController::Base`.

## Remediation
The fix is merged to the master branch but not yet published.

## References
- [Github PR](https://github.com/upmin/upmin-admin-ruby/pull/178)
- [Github Commit](https://github.com/upmin/upmin-admin-ruby/commit/49252e6ae6655642d5c0a23e4ef2fca2535212e7)
