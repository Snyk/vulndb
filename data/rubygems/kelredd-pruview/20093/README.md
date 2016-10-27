## Oerview
kelredd-pruview Gem for Ruby contains a flaw in /lib/pruview/document.rb. The issue is triggered during the handling of a specially crafted file name that contains injected shell metacharacters. This may allow a context-dependent attacker to potentially execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-92228
- http://osvdb.org/show/osvdb/92228
