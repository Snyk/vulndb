## Oerview
gyazo Gem for Ruby contains a flaw in client.rb that is triggered when handling metacharacters. This may allow a remote attacker to execute arbitrary commands.

## Remediation
Upgrade to version `>= 2.0.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-108563
- http://osvdb.org/show/osvdb/108563
