## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Ruby on Rails contains a flaw that allows a remote cross-site scripting (XSS) attack. This flaw exists because the application does not validate direct manipulations of SafeBuffer objects via '[]' and other methods.

## Details
This may allow a user to create a specially crafted request that would execute arbitrary script code in a user's browser within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/OSVDB-79726
- https://groups.google.com/forum/#!topic/rubyonrails-security/7dKPHj0E6RM
