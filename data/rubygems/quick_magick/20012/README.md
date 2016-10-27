## Oerview
quick_magick Gem for Ruby contains a flaw in the QuickMagick::Image.read function. The issue is triggered when handling a specially crafted string. This may allow a remote attacker to inject arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-106954
- http://osvdb.org/show/osvdb/106954
