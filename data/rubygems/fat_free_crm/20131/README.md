## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to SQL injection
attacks.

## Details
`fat_free_crm` does not properly sanitize user-supplied input to the `state` parameter or input passed via comments and emails, in the `app/controllers/home_controller.rb` script. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## References
- http://rubysec.com/advisories/OSVDB-101448
- http://osvdb.org/show/osvdb/101448
