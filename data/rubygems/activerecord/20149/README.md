## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

There is a data injection vulnerability in ActiveRecord. Specially crafted strings can be used to save data in PostgreSQL array columns that may not be intended. 

### Details
Specially crafted strings may be used to save data to array columns in PostgreSQL databases. This vulnerability cannot be used to delete data or execute arbitrary SQL statements, but *can* be used to add data that could have an impact on the application (such as setting an admin flag). Only array type columns in PostgreSQL are impacted. 

## References
- http://rubysec.com/advisories/CVE-2014-0080
- https://groups.google.com/forum/#!topic/rubyonrails-security/Wu96YkTUR6s
