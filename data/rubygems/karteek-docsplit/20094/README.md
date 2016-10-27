## Oerview
Karteek Docsplit Gem for Ruby contains a flaw that is due to the program failing to properly sanitize input passed to text_extractor.rb. With a specially crafted file name that contains shell metacharacters, a context-dependent attacker can execute arbitrary commands

## References
- http://rubysec.com/advisories/OSVDB-92117
- http://osvdb.org/show/osvdb/92117
