## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Cross-Site Request Forgery (CSRF/XSRF).

## Details
`fat_free_crm` does not require multiple steps, explicit confirmation, or a unique token when performing HTTP requests to `/admin/users`. By tricking a user into following a specially crafted link, a context-dependent attacker can perform a Cross-Site Request Forgery (CSRF/XSRF) attack causing the victim to creating administrative
users.

## References
- http://rubysec.com/advisories/CVE-2015-1585
