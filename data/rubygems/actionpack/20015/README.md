## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem, do not sanitize the values provided for response content types, allowing a remote attacker to inject arbitrary HTTP headers into a response.

## Remediation
Upgrade to version `2.3.13` or greater.

## References
- http://rubysec.com/advisories/CVE-2011-3186/
- https://groups.google.com/forum/#!topic/rubyonrails-security/b_yTveAph2g
