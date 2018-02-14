## Overview
[`devise_security_extension`](https://rubygems.org/gems/devise_security_extension) is an enterprise security extension for devise.

Affected versions of the package are vulnerable to Authentication Bypass. Any user updating their password will elevate their privileges to admin by the password updating method.

## Remediation
Upgrade `devise_security_extension` to version 0.10.0 or higher.

## References
- [Github PR](https://github.com/phatworx/devise_security_extension/pull/115)
- [Github Commit](https://github.com/phatworx/devise_security_extension/commit/cf84af6d6b830255e33f341b4640f195e51cd92b)
