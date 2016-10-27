## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a hash restriction weakness that occurs when parsing a modified URL. This may allow an attacker to manipulate order state values. The `Order` model was not using `attr_accessible` to protect its attributes from a potential mass assignment exploit.

## References
- http://rubysec.com/advisories/CVE-2008-7310
- https://spreecommerce.com/blog/security-vulnerability-mass-assignment
- http://lesseverything.com/blog/use-attr_protected-or-we-will-hack-you/
