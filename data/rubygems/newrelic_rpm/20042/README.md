## Oerview
A bug in the Ruby agent causes database connection information and raw SQL
statements to be transmitted to New Relic servers. The database connection
information includes the database IP address, username, and password


## Remediation
Upgrade to version `>= 3.5.3.25` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90189
- http://osvdb.org/show/osvdb/90189
