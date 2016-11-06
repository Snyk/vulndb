## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site scripting (XSS) attacks.

## Details
There is a vulnerability in the internationalization component of Ruby on Rails. When the i18n gem is unable to provide a translation for a given string, it creates a fallback HTML string. Under certain configurations, an attacker can provide a specially crafted input which will execute a reflective XSS attack.

The root cause of this issue is a [vulnerability in the i18n gem](https://snyk.io/vuln/SNYK-RUBY-I18N-20124) which has been assigned the identifier CVE-2013-4492.

## References

- https://hakiri.io/technologies/rails/issues/4c55efe3784050
- https://groups.google.com/forum/#!topic/ruby-security-ann/pLrh6DUw998
