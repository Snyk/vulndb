## Overview
[`shoppe`](https://rubygems.org/gems/shoppe) is a full Rails engine providing e-commerce functionality for any Rails 4 application.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF). The anti-CSRF protection `protect_from_forgery` is off by default in `Rails ActionController::Base`.

## Remediation
Upgrade `shoppe` to version 1.1.1 or higher.

## References
- [Github PR](https://github.com/tryshoppe/shoppe/pull/238)
- [Github Commit](https://github.com/tryshoppe/shoppe/commit/ebc16a60c9965bd7b4dcf3f9039930fa54554b62)
