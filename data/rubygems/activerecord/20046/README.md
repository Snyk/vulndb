## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

The issue is due to an error with the way the ActiveRecord handles parameters combined with an error during the parsing of the JSON parameters. This may allow a remote attacker to bypass restrictions and issue unexpected database queries with `IS NULL` or empty `WHERE` clauses, and forcing the query to unexpectedly check for `NULL` or eliminate a `WHERE` clause.

## References
- http://rubysec.com/advisories/CVE-2013-0155
