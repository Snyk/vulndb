## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

Due to the way dynamic finders in ActiveRecord extract options from method parameters, a method parameter can mistakenly be used as a scope. Carefully crafted requests can use the scope to inject arbitrary SQL.

## References
- http://rubysec.com/advisories/CVE-2012-6496
- https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/DCNTNp_qjFM
