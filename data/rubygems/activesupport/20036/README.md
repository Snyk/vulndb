## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Ruby on Rails contains a flaw that allows a remote cross-site scripting (XSS) attack. This flaw exists because the HTML escaping code functionality does not properly escape a single quote character. This may allow a user to create a specially crafted request that would execute arbitrary script code in a user's browser within the trust relationship between their browser and the server.

## Details

The HTML escaping code in Ruby on Rails does not escape all potentially dangerous characters. In particular the code does not escape the single quote character. The helpers used in Rails itself never use single quotes, so most applications are unlikely to be vulnerable, however all users running an affected release should still upgrade.

## References
- http://rubysec.com/advisories/OSVDB-84516
- https://groups.google.com/d/msg/rubyonrails-security/kKGNeMrnmiY/r2yM7xy-G48J
