## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site scripting (XSS) attacks via the `translate` helper method.

## Details
A cross-site scripting (XSS) flaw was found in the way the `translate` helper
method of the Ruby on Rails performed HTML escaping of interpolated user
input, when interpolation in combination with HTML-safe translations were used. A remote attacker could use this flaw to execute arbitrary HTML or web
script by providing a specially-crafted input to Ruby on Rails application, using the `ActionPack` module and its `translate` helper method without explicit (application specific) sanitization of user provided input.

## Remediation
Upgrade to version `3.0.11` or greater.

## References
- http://rubysec.com/advisories/CVE-2011-4319/
- https://groups.google.com/forum/#!topic/rubyonrails-security/K2HXD7c8fMU
