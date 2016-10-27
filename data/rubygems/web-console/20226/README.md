## Overview
[`web-console`](https://rubygems.org/gems/web-console) is a debugging tool for Ruby on Rails applications.
Affected versions of this gem are vulnerable to Authentication Bypass attacks.

## Details
Specially crafted remote requests can spoof their origin, bypassing the IP whitelist, in any environment where Web Console is enabled (development and test, by default).

Users whose application is only accessible from localhost (as is the default behavior in Rails 4.2) are not affected, unless a local proxy is involved.

All affected users should either upgrade or use one of the work arounds immediately.

To work around this issue, turn off web-console in all environments, by removing/commenting it from the application's Gemfile.

## References
- http://rubysec.com/advisories/CVE-2015-3224
- https://groups.google.com/forum/#!topic/ruby-security-ann/lzmz9_ijUFw
- http://openwall.com/lists/oss-security/2015/06/16/18
