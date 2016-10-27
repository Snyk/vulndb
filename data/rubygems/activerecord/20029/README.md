## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

The vulnerability may allow an attacker to carry out an SQL injection attack. The issue is due to the ActiveRecord class not properly sanitizing user-supplied input to the `where` method. This may allow an attacker to inject or manipulate SQL queries in an application built on Ruby on Rails, allowing for the manipulation or disclosure of arbitrary data.

## References
- http://rubysec.com/advisories/CVE-2012-2661
