## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw that leads to unauthorized privileges being gained. The issue is triggered as certain input related to mass role assignment in `app/models/spree/user.rb` is not properly verified before being used to update a user. This may allow a remote attacker to assign arbitrary roles and gain elevated administrative privileges.

## References
- http://rubysec.com/advisories/CVE-2013-2506
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
