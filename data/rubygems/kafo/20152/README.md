## Oerview
Kafo contains a flaw that is due to the program using insecure world-readable permissions for the default_values.yaml file. This may allow a local attacker to gain access to password and other unspecified sensitive information located within the file.

## Remediation
Upgrade to version `~> 0.3.17` or greater.

## References
- http://rubysec.com/advisories/OSVDB-106826
- http://osvdb.org/show/osvdb/106826
