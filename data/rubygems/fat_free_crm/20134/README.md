## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Information Exposure.

## Details
`fat_free_crm` contains a flaw in user controllers that is triggered as JSON
requests are rendered with a full JSON object. This may allow a remote
attacker to gain access to sensitive information e.g. other
users password hashes.

## References
- http://rubysec.com/advisories/OSVDB-101447
- http://osvdb.org/show/osvdb/101447
