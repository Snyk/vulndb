## Oerview
fastreader Gem for Ruby contains a flaw that is triggered during the handling
of specially crafted input passed via a URL that contains a ';' character.
This may allow a context-dependent attacker to potentially execute arbitrary
commands.


## References
- http://rubysec.com/advisories/OSVDB-91232
- http://osvdb.org/show/osvdb/91232
