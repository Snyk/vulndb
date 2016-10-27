## Overview
[`omniauth-oauth2`](https://rubygems.org/gems/omniauth-oauth2) is an Oauth 2.0 strategy for OmniAuth.

Affected versions carry a flaw that allows an attacker to inject values into a user's session through a CSRF attack.

## References
- http://rubysec.com/advisories/CVE-2012-6134/
- https://gist.github.com/homakov/3673012
- https://github.com/intridea/omniauth-oauth2/pull/25
