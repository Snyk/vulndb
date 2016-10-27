## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
The sanitize helper in Ruby on Rails is designed to filter HTML and remove all tags and attributes which could be malicious. The code which ensured that URLs only contain supported protocols contained several bugs which could allow an attacker to embed a tag containing a URL which executes arbitrary javascript code.

## References
- http://rubysec.com/advisories/CVE-2013-1857
