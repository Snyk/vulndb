## Oerview
ftpd Gem for Ruby contains a flaw that is triggered when handling a
specially crafted option or filename that contains a shell
character. This may allow a remote attacker to inject arbitrary
commands.


## Remediation
Upgrade to version `>= 0.2.2` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90784
- http://osvdb.org/show/osvdb/90784
