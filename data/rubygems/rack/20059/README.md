## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby.
Affected versions of this Gem are vulnerable to Remote Code Execution.

## Details
Rack contains a flaw that is due to an error in the `Rack::Session::Cookie` function allowing a remote attackers to guess the session cookie, gain privileges, and execute arbitrary code via a timing attack involving an HMAC comparison function that does not run in constant time.

## References
- http://rubysec.com/advisories/CVE-2013-0263
