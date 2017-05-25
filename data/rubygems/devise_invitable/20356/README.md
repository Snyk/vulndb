## Overview
[`devise_invitable`](https://rubygems.org/gems/devise_invitable) adds support for send invitations by email (it requires to be authenticated) and accept the invitation by setting a password.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF) attacks when the forgery protection strategy is set to `:null_session` or `:reset_session`. The value returned by the `current_inviter` function is memoized before the session is checked, so the session is cleaned but the current inviter remains memoized. Thus attackers can use the CSRF token to authenticate malicious requests.

## Remediation
Upgrade `devise_invitable` to version 1.3.5 or higher.

## References
- [GitHub Issue](https://github.com/scambra/devise_invitable/issues/457)
- [GitHub Commit](https://github.com/scambra/devise_invitable/commit/d1bb19efca8e35885e1c2f0931d6171fce8cf74e)
