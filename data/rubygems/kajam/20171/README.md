## Oerview
kajam Gem for Ruby contains a flaw in
/dataset/lib/dataset/database/postgresql.rb that is triggered when handling
metacharacters. This may allow a remote attacker to execute arbitrary
commands.


## References
- http://rubysec.com/advisories/OSVDB-108530
- http://osvdb.org/show/osvdb/108530
