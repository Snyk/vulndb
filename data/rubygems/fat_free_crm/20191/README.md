## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
`fat_free_crm` gem does not contains a Cross-site Scripting (XSS) vulnerability. When a user is created/updated using a specifically crafted username, first name or last name, it is possible for arbitrary javascript to be executed on all `fat_free_crm` pages. This code would be executed for all logged in users.

## References
- http://rubysec.com/advisories/CVE-2014-5441
