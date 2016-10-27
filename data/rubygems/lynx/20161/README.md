## Oerview
lynx Gem for Ruby contains a flaw in command/basic.rb that is due to the application exposing password information in plaintext in the process table. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/OSVDB-108580
- http://osvdb.org/show/osvdb/108580
