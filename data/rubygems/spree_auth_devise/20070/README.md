## Overview
[`spree_auth_devise`](https://rubygems.org/gems/spree_auth_devise) provides authentication and authorization services for use with [`spree`](https://rubygems.org/gems/spree) by using Devise and CanCan.

Affected versions of this gem are vulnerable to unauthorized privileges being gained. The issue is triggered as certain input related to mass role assignment in `app/models/spree/user.rb` is not properly verified before being used to update a user. This may allow a remote attacker to assign arbitrary roles and gain elevated administrative privileges.

This vulnerability is related to [spree_auth](https://snyk.io/vuln/SNYK-RUBY-SPREEAUTH-20072).

## References
- http://rubysec.com/advisories/CVE-2013-2506
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
