## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

Ruby on Rails contains a flaw that may allow carrying out an SQL injection attack. The issue is due to the PostgreSQL adapter for ActiveRecord not properly sanitizing user-supplied input when quoting `ranges`. This may allow a remote attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

### Details
PostgreSQL supports a number of unique data types which are not present in other supported databases.  A bug in the SQL quoting code in ActiveRecord can allow an attacker to inject arbitrary SQL using carefully crafted values.

Only applications which query against either `bitstring` or `range` types are vulnerable. The particular data types affected depend on the version of Rails you're using, but the vulnerable code will look the same.  Vulnerable code will take either take the form of:
```ruby
  Model.where(bitstring: params[:some_value])
  Model.where(range: params[:from]..params[:to])
```

## References
- http://rubysec.com/advisories/CVE-2014-3483
- https://groups.google.com/d/msg/rubyonrails-security/wDxePLJGZdI/WP7EasCJTA4J