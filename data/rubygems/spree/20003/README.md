## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.
Spree contains a hardcoded flaw related to the `config.action_controller_session` hash value. This may allow an attacker to
more easily bypass cryptographic protection.

## References
- http://rubysec.com/advisories/CVE-2008-7311
- https://spreecommerce.com/blog/security-vulernability-session-cookie-store
