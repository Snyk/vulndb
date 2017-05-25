## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw in the API as HTTP requests do not require multiple steps, explicit confirmation, or a unique token when performing certain sensitive actions. By tricking a user into following a specially crafted link, a context-dependent attacker can perform a Cross-Site Request Forgery (CSRF / XSRF) attack causing the victim to disclose potentially sensitive information to attackers.

## References
- http://rubysec.com/advisories/OSVDB-119205
- https://spreecommerce.com/blog/security-updates-2015-3-3
