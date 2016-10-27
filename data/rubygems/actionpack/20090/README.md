## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
There is a Cross-site Scripting (XSS) vulnerability in the `sanitize_css` method in Action Pack. Carefully crafted text can bypass the sanitization provided in the `sanitize_css` method in Action Pack.

## References
- http://rubysec.com/advisories/CVE-2013-1855
