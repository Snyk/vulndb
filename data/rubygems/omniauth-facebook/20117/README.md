## Oerview

[`omniauth-facebook`](https://rubygems.org/gems/omniauth-facebook) is a Facebook OAuth2 Strategy for OmniAuth.

`omniauth-facebook` Gem for Ruby contains a flaw where an attacker can perform a Cross-Site Request Forgery (CSRF / XSRF) attack causing the victim to perform an unspecified action.


## Details
As HTTP requests do not require multiple steps, explicit confirmation, or a unique token when performing certain sensitive actions. By tricking a user into following a specially crafted link, a context-dependent attacker can perform a Cross-Site Request Forgery (CSRF / XSRF) attack causing the victim to perform an unspecified action.

## References
- http://rubysec.com/advisories/OSVDB-99693
- https://groups.google.com/d/msg/ruby-security-ann/-tJHNlTiPh4/9SJxdEWLIawJ
