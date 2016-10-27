## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks when the
with_http_digest helper method is being used.

## Details
Ruby on Rails contains a flaw that may allow a remote denial of service. The issue is triggered when an error occurs in when the `with_http_digest` helper method is being used. This may allow a remote attacker to cause a loss of availability for the program.

## Remediation
Upgrade to version `~> 3.0.16` or greater.

## References
- http://rubysec.com/advisories/CVE-2012-3424
