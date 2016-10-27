## Oerview
fog-dragonfly Gem for Ruby contains a flaw that is due to the program
failing to properly sanitize input passed via the imagemagickutils.rb script.
This may allow a remote attacker to execute arbitrary commands.

This gem has been renamed. Please use "dragonfly" from now on.


## Remediation
Upgrade to version `>= 0.8.4` or greater.

## References
- http://rubysec.com/advisories/OSVDB-96798
- http://osvdb.org/show/osvdb/96798
