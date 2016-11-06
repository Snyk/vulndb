## Overview
[`rest-client`](https://rubygems.org/gems/rest-client) gem is an HTTP and REST client for Ruby.
Affected versions of this gem improperly handle Set-Cookie headers on
HTTP 30x redirection responses in `abstract_response.rb`. Any cookies will be forwarded to the redirection target regardless of domain, path, or expiration.

If an attacker controls a redirection source, they can cause rest-client to perform a request to any third-party domain with cookies of their choosing, which may be useful in performing a Session Fixation attack.

If an control a redirection target, you can steal any cookies set by the
third-party redirection request.

## References
- http://rubysec.com/advisories/CVE-2015-1820
- https://github.com/rest-client/rest-client/issues/369
