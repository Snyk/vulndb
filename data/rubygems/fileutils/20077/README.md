## Oerview
fileutils Gem for Ruby contains a flaw as the program creates temporary files insecurely. It is possible for a local attacker to use a symlink attack against temporary files created by files_utils.rb to cause the program to unexpectedly overwrite an arbitrary file.

## References
- http://rubysec.com/advisories/OSVDB-90715
- http://osvdb.org/show/osvdb/90715
