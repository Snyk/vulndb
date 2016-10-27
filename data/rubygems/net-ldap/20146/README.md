## Oerview
Net::LDAP for Ruby contains a flaw in lib/net/ldap/password.rb. The issue is due to the program generating SSHA passwords with a weak salt value that is between 0 and 999. This may allow a local attacker to more easily gain access to password information.

## Remediation
Upgrade to version `>= 0.6.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-106108
- http://osvdb.org/show/osvdb/106108
