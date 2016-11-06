## Overview
[`fat_free_crm`](https://rubygems.org/gems/fat_free_crm) is an open source, Ruby on Rails customer relationship management platform.
Affected versions of this gem are vulnerable to Cross-Site Request Forgery (CSRF/XSRF).

## Details
`fat_free_crm` is missing the `protect_from_forgery` statement. It does not require multiple steps, explicit confirmation, or a unique token when performing HTTP requests to `app/controllers/application_controller.rb`. By tricking a user into following a specially crafted link, a context-dependent attacker can perform a Cross-Site Request Forgery (CSRF/XSRF) attack causing the victim to perform unspecified actions.

## References
- http://rubysec.com/advisories/OSVDB-101446
- http://osvdb.org/show/osvdb/101446
