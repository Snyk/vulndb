## Oerview
httparty Gem for Ruby contains a flaw that is triggered when a type casting
error occurs during the parsing of parameters. This may allow a
context-dependent attacker to potentially execute arbitrary code.


## Remediation
Upgrade to version `>= 0.10.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90741
- http://osvdb.org/show/osvdb/90741
