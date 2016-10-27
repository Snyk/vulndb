## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw that is triggered when handling input passed via the `promotion_rule` parameter to `promotion_rules_controller.rb`. This may allow a remote authenticated attacker to instantiate arbitrary Ruby objects and potentially execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-91219
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
