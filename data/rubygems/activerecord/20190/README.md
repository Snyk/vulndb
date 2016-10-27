## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

The `create_with` functionality in _ActiveRecord_ was implemented incorrectly and completely bypasses the strong parameters protection. Applications which pass user-controlled values to `create_with` could allow attackers to set arbitrary attributes on models.

## References
- http://rubysec.com/advisories/CVE-2014-3514
- https://groups.google.com/forum/#!msg/rubyonrails-security/M4chq5Sb540/CC1Fh0Y_NWwJ
