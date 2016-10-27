## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

The vulnerability lies within the way ActiveRecord handles parameters in conjunction with the way Rack parses query parameters.
This issue may allow an attacker to inject arbitrary `IS NULL` clauses in to application SQL queries. This may also allow an attacker to have the SQL query check for `NULL` in arbitrary places.

## References
- http://rubysec.com/advisories/CVE-2012-2660
