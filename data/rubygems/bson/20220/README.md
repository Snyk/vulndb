## Overview

[`bson`](https://rubygems.org/gems/bson) is a full featured BSON specification implementation in Ruby.

Affected versions of this gem allow an attacker to perform a BSON Injection. A flaw in the `ObjectId` validation regular expression can enable attackers to inject arbitrary information into a given BSON object.

## References

- http://rubysec.com/advisories/CVE-2015-4412
- http://sakurity.com/blog/2015/06/04/mongo_ruby_regexp.html
- https://access.redhat.com/security/cve/cve-2015-4412
