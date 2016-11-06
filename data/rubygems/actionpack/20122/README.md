## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks via the header handling component.

## Details
actionpack/lib/action_view/lookup_context.rb in Action View in Ruby on Rails 3.x before 3.2.16 and 4.x before 4.0.2 allows remote attackers to cause a denial of service (memory consumption) via a header containing an invalid MIME type that leads to excessive caching.

## References
- http://rubysec.com/advisories/CVE-2013-6414/
- https://groups.google.com/forum/#!topic/ruby-security-ann/A-ebV4WxzKg
