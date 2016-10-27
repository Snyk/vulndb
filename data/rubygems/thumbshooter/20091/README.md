## Oerview
Thumbshooter Gem for Ruby contains a flaw that is due to the program failing to properly sanitize input passed to thumbshooter.rb. With a specially crafted URL that contains shell metacharacters, a context-dependent attacker can execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-91839
- http://osvdb.org/show/osvdb/91839
