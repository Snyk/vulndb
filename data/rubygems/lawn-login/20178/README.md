## Oerview
lawn-login Gem for Ruby contains a flaw in /lib/lawn.rb that is due to the application exposing password information in plaintext in the process table. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/OSVDB-108576
- http://osvdb.org/show/osvdb/108576
