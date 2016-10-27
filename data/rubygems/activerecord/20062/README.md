## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

There's flaw in the `attr_protected` method of the Active Record. The issue is triggered during the handling of a specially crafted request, which may allow a remote attacker to bypass protection mechanisms and alter values that would otherwise be protected.

## References
- http://rubysec.com/advisories/CVE-2013-0276
