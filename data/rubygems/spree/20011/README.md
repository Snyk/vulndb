## Overview
[`Spree`](https://rubygems.org/gems/spree) is an open source e-commerce framework for Ruby on Rails.

Spree contains a flaw that may lead to an unauthorized information disclosure. The issue is triggered when the application exchanges data using the JSON service without validating requests, which will disclose sensitive user and order information to a context-dependent attacker when a logged-in user visits a crafted website.

## References
- http://rubysec.com/advisories/CVE-2010-3978
- https://spreecommerce.com/blog/json-hijacking-vulnerability
- https://groups.google.com/forum/#!search/CVE-2010-3978/mailing.unix.bugtraq/jG-mO9_x-78/utUoVe-Ujj8J
