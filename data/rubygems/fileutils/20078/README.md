## Oerview
fileutils Gem for Ruby contains a flaw that is due to the program not verifying the existence of a directory before attempting to create it. This may allow a local attacker to create the directory in advance, thus owning any files subsequently written to it.

## References
- http://rubysec.com/advisories/OSVDB-90716
- http://osvdb.org/show/osvdb/90716
