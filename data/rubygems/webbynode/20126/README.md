## Oerview
Webbynode Gem for Ruby contains a flaw in notify.rb that is triggered
when handling a specially crafted growlnotify message. This may allow a
context-dependent attacker to execute arbitrary commands.


## References
- http://rubysec.com/advisories/OSVDB-100920
- http://osvdb.org/show/osvdb/100920
