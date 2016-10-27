## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

When a hash is provided as the find value for a query, the keys of the hash may be converted to symbols. Carefully crafted requests can coerce `params[:name]` to return a hash, and the keys to that hash may be converted to symbols. Ruby symbols are not garbage collected, so an attacker can initiate a denial of service attack by creating a large number of symbols.

## References
- http://rubysec.com/advisories/CVE-2013-1854
