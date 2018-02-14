## Overview
[`upmin-admin`](https://rubygems.org/gems/upmin-admin) is Customizable admin dashboards generated with only a few lines of code.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF). The anti-CSRF protection `protect_from_forgery` is off by default in `Rails ActionController::Base`.

## Remediation
There is no fix version for `upmin-admin`.

## References
- [Github PR](https://github.com/upmin/upmin-admin-ruby/pull/178)
