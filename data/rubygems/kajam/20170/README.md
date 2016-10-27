## Oerview
kajam Gem for Ruby contains a flaw in
/dataset/lib/dataset/database/postgresql.rb that is triggered as the program
exposes the MySQL or PostgreSQL password in the process list. This may allow
a local attacker to gain access to password information.


## References
- http://rubysec.com/advisories/OSVDB-108529
- http://osvdb.org/show/osvdb/108529
