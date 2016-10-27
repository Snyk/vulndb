## Oerview
Fat Free CRM contains a flaw that may allow carrying out an SQL injection
attack. The issue is due to the app/controllers/home_controller.rb script
not properly sanitizing user-supplied input to the 'state' parameter or
input passed via comments and emails. This may allow a remote attacker to
inject or manipulate SQL queries in the back-end database, allowing for
the manipulation or disclosure of arbitrary data.


## Remediation
Upgrade to version `>= 0.13.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-101448
- http://osvdb.org/show/osvdb/101448
