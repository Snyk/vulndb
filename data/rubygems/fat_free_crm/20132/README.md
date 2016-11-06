## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Arbitrary Code Execution.

## Details
`fat_free_crm` contains a flaw that is due to the application defining a static
security session token in `config/initialiers/secret_token.rb`. If a remote
attacker has explicit knowledge of this token, they can potentially execute
arbitrary code.

## References
- http://rubysec.com/advisories/CVE-2013-7222
