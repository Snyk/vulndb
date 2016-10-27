## Oerview
Rack::Cache (rack-cache) contains a flaw related to the rubygem caching
sensitive HTTP headers. This will result in a weakness that may make it
easier for an attacker to gain access to a user's session via a specially
crafted header.


## Remediation
Upgrade to version `>= 1.2` or greater.

## References
- http://rubysec.com/advisories/OSVDB-83077
- http://osvdb.org/83077
