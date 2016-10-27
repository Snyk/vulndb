## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site scripting (XSS) attacks.

## Details
This flaw exists because the actionpack/lib/action_view/helpers/number_helper.rb script does not validate input to the `number_to_currency`, `number_to_percentage`, and `number_to_human` helpers before returning it to users. This would allow a remote attacker to create a request that executes code in a user's browser session.

## Remediation
Upgrade to version `3.2.17` or greater.

## References
- http://rubysec.com/advisories/CVE-2014-0081/
- https://groups.google.com/forum/#!topic/rubyonrails-security/tfp6gZCtzr4
