## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby.
Affected versions of this Gem are vulnerable to Remote Code Execution.

## Details
Rack contains a flaw that is due to an error in the `Rack::Session::Cookie` function allowing a remote attackers to guess the session cookie, gain privileges, and execute arbitrary code via a timing attack involving an HMAC comparison function that does not run in constant time.

## References
- https://bugzilla.redhat.com/show_bug.cgi?id=909071
- https://github.com/rack/rack/commit/9a81b961457805f6d1a5c275d053068440421e11
