## Oerview
lean-ruport Gem for Ruby contains a flaw in /test/tc_database.rb that is due to the application exposing MySQL password information in plaintext in the process table. This may allow a local attacker to gain access to MySQL password information.

## References
- http://rubysec.com/advisories/OSVDB-108581
- http://osvdb.org/show/osvdb/108581
