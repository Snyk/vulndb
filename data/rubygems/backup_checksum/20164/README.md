## Oerview
backup_checksum Gem for Ruby contains a flaw in /lib/backup/cli/utility.rb
that is triggered as the program displays password information in plaintext
in the process list. This may allow a local attacker to gain access to
password information.


## References
- http://rubysec.com/advisories/OSVDB-108569
- http://osvdb.org/show/osvdb/108569
