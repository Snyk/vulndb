## Oerview
codders-dataset Gem for Ruby contains a flaw in /lib/dataset/database/mysql.rb that is due to the application exposing credential information in plaintext in the process table. This may allow a local attacker to gain access to credential information.

## References
- http://rubysec.com/advisories/OSVDB-108583
- http://osvdb.org/show/osvdb/108583
