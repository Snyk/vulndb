## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) Attacks.

## Details
A carefully crafted accept header can cause a global cache of mime types to
grow indefinitely which can lead to a possible denial of service attack in
Action Pack.

All users running an affected release should either upgrade or use one of the
workarounds immediately.

## References
- http://rubysec.com/advisories/CVE-2016-0751
- https://groups.google.com/forum/#!topic/rubyonrails-security/9oLY_FCzvoc
