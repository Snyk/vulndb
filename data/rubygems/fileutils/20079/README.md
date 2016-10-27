## Oerview
fileutils Gem for Ruby contains a flaw in /lib/file_utils/open_office.rb. The issue is triggered when handling a specially crafted URL containing a command after a delimiter (;). This may allow a remote attacker to potentially execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-90718
- http://osvdb.org/show/osvdb/90718
