## Oerview
The enum_column3 Gem for Ruby contains a flaw that may allow a remote denial of service. The issue is due to the program typecasting unexpected strings to symbols. This may allow a remote attacker to crash the program.

## References
- http://rubysec.com/advisories/OSVDB-94679
- http://osvdb.org/show/osvdb/94679
