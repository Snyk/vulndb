## Oerview
Fat Free CRM contains a flaw in user controllers that is triggered as JSON
requests are rendered with a full JSON object. This may allow a remote
attacker to gain access to potentially sensitive information e.g. other
users password hashes.


## Remediation
Upgrade to version `>= 0.13.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-101447
- http://osvdb.org/show/osvdb/101447
