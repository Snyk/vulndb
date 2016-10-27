## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

There is a vulnerability when ActiveRecord is used in conjunction with JSON parameter parsing. 

This vulnerability is similar to [CVE-2012-2660](https://snyk.io/vuln/SNYK-RUBY-ACTIVERECORD-20030), CVE-2012-2694 and [CVE-2013-0155](https://snyk.io/vuln/SNYK-RUBY-ACTIVERECORD-20046).

### Details
Due to the way ActiveRecord interprets parameters in combination with the way that JSON parameters are parsed, it is possible for an attacker to issue unexpected database queries with `IS NULL` or empty `WHERE` clauses. This issue does *not* let an attacker insert arbitrary values into an SQL query, however they can cause the query to check for `NULL` or eliminate a `WHERE` clause when most users wouldn't expect it.

For example, a system has password reset with token functionality:

```ruby
    unless params[:token].nil?
      user = User.find_by_token(params[:token])
      user.reset_password!
    end
```

An attacker can craft a request such that `params[:token]` will return `[nil]`.  The `[nil]` value will bypass the test for nil, but will still add an `IN ('xyz', NULL)` clause to the SQL query.

Similarly, an attacker can craft a request such that `params[:token]` will return an empty hash.  An empty hash will eliminate the WHERE clause of the query, but can bypass the `nil?` check.

Note that this impacts not only dynamic finders (`find_by_*`) but also relations (`User.where(:name => params[:name])`).

## References
- http://rubysec.com/advisories/CVE-2016-6317
- https://groups.google.com/forum/#!topic/rubyonrails-security/rgO20zYW33s
