## Oerview
rest-client in abstract_response.rb improperly handles Set-Cookie headers on
HTTP 30x redirection responses. Any cookies will be forwarded to the
redirection target regardless of domain, path, or expiration.

If you control a redirection source, you can cause rest-client to perform a
request to any third-party domain with cookies of your choosing, which may be
useful in performing a session fixation attack.

If you control a redirection target, you can steal any cookies set by the
third-party redirection request.


## Remediation
Upgrade to version `>= 1.8.0` or greater.

## References
- http://rubysec.com/advisories/CVE-2015-1820
- https://github.com/rest-client/rest-client/issues/369
