## Overview
[`spree_auth`](https://rubygems.org/gems/spree_auth) is a required dependency for [`spree`](https://rubygems.org/gems/spree).

Affected versions of this gem are vulnerable to unauthorized privileges being gained. The issue is triggered as certain input related to mass role assignment in `app/models/spree/user.rb` is not properly verified before being used to update a user. This may allow a remote attacker to assign arbitrary roles and gain elevated administrative privileges.

This vulnerability is related to [spree_auth_devise](https://snyk.io/vuln/SNYK-RUBY-SPREEAUTH-20070)

## References
- http://rubysec.com/advisories/CVE-2013-2506
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
