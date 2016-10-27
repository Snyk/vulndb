## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Directory Traversal attacks.

## Details

The `implicit render` functionality allows controllers to render a template, even if there is no explicit action with the corresponding name. This module does not perform adequate input sanitization, which could allow an attacker to use a specially crafted request to retrieve arbitrary files from the rails application server.

## References

- http://rubysec.com/advisories/CVE-2014-0130
- https://groups.google.com/forum/#!topic/rubyonrails-security/NkKc7vTW70o
