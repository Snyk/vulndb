## Oerview
ActiveRecord-JDBC-Adapter (AR-JDBC) contains a flaw that may allow carrying
out an SQL injection attack. The issue is due to the sql.gsub() function in
lib/arjdbc/jdbc/adapter.rb not properly sanitizing user-supplied input before
using it in SQL queries. This may allow a remote attacker to inject or
manipulate SQL queries in the back-end database, allowing for the
manipulation or disclosure of arbitrary data.


## Remediation
Upgrade to version `>= 1.2.8` or greater.

## References
- http://rubysec.com/advisories/OSVDB-114854
- http://osvdb.org/show/osvdb/114854
