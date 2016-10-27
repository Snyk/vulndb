## Overview
[`devise`](https://rubygems.org/gems/devise) is an authentication framework for Rails with Warden.

Affected versions contain a flaw that allows a remote, user-assisted attacker to conduct a CSRF token fixation attack. This issue is triggered as previous CSRF tokens are not properly invalidated when a new token is created. If an attacker has knowledge of said token, a specially crafted request can be made to it, allowing the attacker to conduct CSRF attacks.

## References
- http://rubysec.com/advisories/OSVDB-114435
- http://blog.plataformatec.com.br/2013/08/csrf-token-fixation-attacks-in-devise/
