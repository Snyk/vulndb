## Oerview
paratrooper-pingdom Gem for Ruby contains a flaw in
/lib/paratrooper-pingdom.rb. The issue is triggered when the script exposes
API login credentials, allowing a local attacker to gain access to the API
key, username, and password for the API login by monitoring the process tree.


## References
- http://rubysec.com/advisories/OSVDB-101847
- http://www.osvdb.org/show/osvdb/101847
