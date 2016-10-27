## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw that is triggered when handling input passed via the `payment_method` parameter to `payment_methods_controller.rb`. This may allow a remote authenticated attacker to instantiate arbitrary Ruby objects and potentially execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-1656
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
