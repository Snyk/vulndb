## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

## Details
The `ProductScope` class fails to properly sanitize user-supplied input via the `search[send][]` parameter resulting in arbitrary command execution. With a specially crafted request, a remote attacker can potentially cause arbitrary command execution.

## References
- http://rubysec.com/advisories/OSVDB-76011
- https://spreecommerce.com/blog/remote-command-product-group
- https://github.com/spree/spree/commit/440d7c87a2ded2736142f768f7a5c9f47e35890b
