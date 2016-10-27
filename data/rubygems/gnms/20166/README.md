## Oerview
gnms Gem for Ruby contains a flaw in /lib/cmd_parse.rb that is triggered when handling shell metacharacters passed via the 'ip' variable. This may allow a remote attacker to inject arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-108594
- http://osvdb.org/show/osvdb/108594
