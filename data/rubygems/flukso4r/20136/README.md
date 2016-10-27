## Oerview
flukso4r Gem for Ruby contains a flaw in /lib/flukso/R.rb that is due to the application failing to properly validate user-supplied input. This may allow a context-dependent attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-101577
- http://osvdb.org/show/osvdb/101577
