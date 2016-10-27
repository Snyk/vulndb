## Oerview
Dragonfly Gem for Ruby contains a flaw that is due to the program failing to
properly escape a shell that contains injected characters. This may allow a
context-dependent attacker to potentially execute arbitrary commands.

This gem has been renamed. Please use "dragonfly" from now on.


## References
- http://rubysec.com/advisories/OSVDB-97854
- http://osvdb.org/show/osvdb/97854
