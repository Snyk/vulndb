## Oerview
sfpagent Gem for Ruby contains a flaw that is triggered as JSON[body]
input is not properly sanitized when handling module names with shell
metacharacters. This may allow a context-dependent attacker to execute
arbitrary commands.


## Remediation
Upgrade to version `>= 0.4.15` or greater.

## References
- http://rubysec.com/advisories/OSVDB-105971
- http://www.osvdb.org/show/osvdb/105971
