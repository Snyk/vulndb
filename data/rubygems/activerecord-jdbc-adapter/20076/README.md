## Overview
[`ActiveRecord-JDBC-Adapter (AR-JDBC)`](https://rubygems.org/gems/activerecord-jdbc-adapter) is a database adapter for Rails' ActiveRecord component designed to be used with JRuby built upon Java's JDBC API for database access.
Affected versions of this gem are vulnerable to SQL injection attacks. The `sql.gsub()` function in `lib/arjdbc/jdbc/adapter.rb` is not properly sanitizing user-supplied input before using it in SQL queries. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade to version `>= 1.2.8` or greater.

## References
- http://rubysec.com/advisories/OSVDB-114854
