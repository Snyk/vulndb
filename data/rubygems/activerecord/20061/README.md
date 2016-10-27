## Overview
[ActiveRecord](https://rubygems.org/gems/activerecord/) is the Object-Relational Mapping (ORM) that comes out-of-the-box with Rails. It plays the role of _Model_ in the MVC architecture employed by Rails.

There's a flaw in the `serialize` helper in the ActiveRecord. The issue is triggered when the system is configured to allow users to directly provide values to be serialized and deserialized using YAML.
With a specially crafted YAML attribute, a remote attacker can deserialize arbitrary YAML and execute code associated with it.

## References
- http://rubysec.com/advisories/CVE-2013-0277
