## Oerview
brbackup Gem for Ruby contains a flaw that is triggered as input passed
via the 'dbuser' variable is not properly sanitized. This may allow a
remote attacker to inject shell metacharacters and execute arbitrary
commands.


## References
- http://rubysec.com/advisories/OSVDB-108900
- http://osvdb.org/show/osvdb/108900
