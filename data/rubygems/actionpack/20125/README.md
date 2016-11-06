## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Unsafe Query Generation Risk.

The prior fix to [CVE-2013-0155](https://snyk.io/vuln/SNYK-RUBY-ACTIONPACK-20125) was incomplete, and some 3rd party libraries can accidentally circumvent the protection.

## Details
It is possible for a 3rd party or custom rack middleware to parse the parameters insecurely and store them in the same key that Rails uses for its own parameters. This is due to the way that `Rack::Request` and `Rails::Request` interact.

If this happens, the application will receive unsafe parameters and could be vulnerable to the earlier vulnerability.

## References

- http://rubysec.com/advisories/CVE-2013-6417/
- https://groups.google.com/forum/#!topic/ruby-security-ann/niK4drpSHT4
