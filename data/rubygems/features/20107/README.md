## Oerview
Features Gem for Ruby contains a flaw that allows a local cross-site scripting (XSS) attack. This flaw exists because the application does not validate certain input upon submission to /tmp/out.html. This may allow an attacker to create a specially crafted request that would execute arbitrary script code in a user's browser within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/OSVDB-96975
- http://osvdb.org/show/osvdb/96975
