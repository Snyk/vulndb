## Oerview
rgpg Gem for Ruby contains a flaw in the GpgHelper module
(lib/rgpg/gpg_helper.rb). The issue is due to the program failing to properly
sanitize user-supplied input before being used in the system() function for
execution. This may allow a remote attacker to execute arbitrary commands.


## Remediation
Upgrade to version `>= 0.2.3` or greater.

## References
- http://rubysec.com/advisories/OSVDB-95948
- http://www.osvdb.org/show/osvdb/95948
