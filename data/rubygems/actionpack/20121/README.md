## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
There is an XSS vulnerability in the `number_to_currency` helper in Ruby on Rails.
The `number_to_currency` helper allows users to nicely format a numeric value. One
of the parameters to the helper (unit) is not escaped correctly.  Applications
which pass user controlled data as the unit parameter are vulnerable to an XSS attack.

## Remediation
Upgrade to version `3.2.16` or greater.

## References
- http://rubysec.com/advisories/CVE-2013-6415
- https://groups.google.com/forum/#!topic/ruby-security-ann/9WiRn2nhfq0
