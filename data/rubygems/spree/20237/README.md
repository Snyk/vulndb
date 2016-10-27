## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw where the rendering of arbitrary RABL templates allows for execution arbitrary files on the host system, as well as disclosing the existence of files on the system. This is a different issue than [OSVDB-125701](https://snyk.io/vuln/SNYK-RUBY-SPREE-20235).

## References
- http://rubysec.com/advisories/OSVDB-125699
- https://spreecommerce.com/blog/security-updates-2015-7-28
