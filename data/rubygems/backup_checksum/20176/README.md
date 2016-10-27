## Oerview
backup_checksum Gem for Ruby contains a flaw in /lib/backup/cli/utility.rb
that is triggered when handling metacharacters. This may allow a remote
attacker to execute arbitrary commands.


## References
- http://rubysec.com/advisories/OSVDB-108570
- http://osvdb.org/show/osvdb/108570
