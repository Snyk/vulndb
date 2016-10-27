## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerabile to Cross-site scripting (XSS) attacks due to lack of validation of manually generated `select tag options`.

## Details
Ruby on Rails contains a flaw that allows a remote cross-site scripting (XSS) attack. This flaw exists because the application does not validate manually generated 'select tag options' upon submission. This may allow a user to create a specially crafted request that would execute arbitrary script code in a user's browser within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/CVE-2012-1099/
