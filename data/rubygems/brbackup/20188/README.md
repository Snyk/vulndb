## Oerview
brbackup Gem for Ruby contains a flaw that may allow carrying out an SQL
injection attack. The issue is due to the /lib/brbackup.rb script not
properly sanitizing user-supplied input to the 'name' parameter. This may
allow a remote attacker to inject or manipulate SQL queries in the back-end
database, allowing for the manipulation or disclosure of arbitrary data.


## References
- http://rubysec.com/advisories/OSVDB-108899
- http://osvdb.org/show/osvdb/108899
