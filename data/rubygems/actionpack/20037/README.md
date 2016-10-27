## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
Ruby on Rails contains a flaw that allows a remote cross-site scripting (XSS)
attack. This flaw exists because input passed via the prompt value is not
properly sanitized by the select_tag helper method before returning it to
the user. This may allow a user to create a specially crafted request that
would execute arbitrary script code in a user's browser within the trust
relationship between their browser and the server.

## Remediation
Upgrade to version `~> 3.0.17` or greater.

## References
- http://rubysec.com/advisories/CVE-2012-3463
