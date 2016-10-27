## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

There is a vulnerability in how the nested attributes feature in ActiveRecord handles updates in combination with destroy flags when destroying records is disabled. 

Attackers could use this do things like set attributes to invalid values and to clear all of the attributes amongst other things.

### Details
When using the nested attributes feature in ActiveRecord you can prevent the destruction of associated records by passing the `allow_destroy: false` option to the `accepts_nested_attributes_for` method. However due to a change in the commit [a9b4b5d](https://github.com/rails/rails/commit/a9b4b5da7c216e4464eeb9dbd0a39ea258d64325 ) the `_destroy` flag prevents the `:reject_if` proc from being called because it assumes that the record will be destroyed anyway. 

However this isn't true if `:allow_destroy` is false so this leads to changes that would have been rejected being applied to the record. 

## References
- http://rubysec.com/advisories/CVE-2015-7577
- https://groups.google.com/forum/#!topic/rubyonrails-security/cawsWcQ6c8g
- https://github.com/rails/rails/commit/a9b4b5da7c216e4464eeb9dbd0a39ea258d64325 
