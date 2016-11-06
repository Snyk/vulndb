## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Information Exposure.

## Details
`fat_free_crm` contains a flaw that is triggered when the attacker sends a
direct request for XML data. This may allow a remote attacker to gain
access to sensitive information.

## References
- http://rubysec.com/advisories/OSVDB-101700
- http://osvdb.org/show/osvdb/101700
