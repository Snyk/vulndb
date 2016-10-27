## Oerview
Dragonfly Gem for Ruby contains a flaw in Uploading & Processing that is due
to the gem failing to restrict arbitrary commands to imagemagicks convert.
This may allow a remote attacker to gain read/write access to the filesystem
and execute arbitrary commands.

This gem has been renamed. Please use "dragonfly" from now on.


## Remediation
Upgrade to version `>= 0.8.4` or greater.

## References
- http://rubysec.com/advisories/OSVDB-110439
- http://osvdb.org/show/osvdb/110439
