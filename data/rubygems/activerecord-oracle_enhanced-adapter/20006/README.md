## Oerview
Oracle "enhanced" ActiveRecord Gem for Ruby contains a flaw that may allow an
attacker to carry out an SQL injection attack. The issue is due to the
program not properly sanitizing user-supplied input related to the :limit and
:offset functions. This may allow an attacker to inject or manipulate SQL
queries in the back-end database, allowing for the manipulation or disclosure
of arbitrary data.


## Remediation
Upgrade to version `>= 1.1.8` or greater.

## References
- http://rubysec.com/advisories/OSVDB-95376
- http://osvdb.org/show/osvdb/95376
