## Oerview
Fat Free CRM contains a flaw that is due to the application defining a static
security session token in config/initialiers/secret_token.rb. If a remote
attacker has explicit knowledge of this token, they can potentially execute
arbitrary code.


## Remediation
Upgrade to version `>= 0.13.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-101445
- http://osvdb.org/show/osvdb/101445
