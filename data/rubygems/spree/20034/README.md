## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.
Product Scopes could allow for unauthenticated remote command execution. This was corrected by removing conditions_any scope and use ARel query building instead.

## References
- http://rubysec.com/advisories/OSVDB-125712
- https://spreecommerce.com/blog/security-issue-all-versions
