## Oerview
Creme Fraiche Gem for Ruby contains a flaw that is due to the program failing to properly sanitize input in file names. With a specially crafted file name that contains shell metacharacters, a context-dependent attacker can execute arbitrary commands

## Remediation
Upgrade to version `>= 0.6.1` or greater.

## References
- http://rubysec.com/advisories/OSVDB-93395
- http://osvdb.org/show/osvdb/93395
