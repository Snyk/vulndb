## Overview

[`moped`](https://rubygems.org/gems/moped) is a MongoDB driver for Ruby.

Affected versions of this gem contain a flaw in the `ObjectId` validation, which can enable a Denial of Service (DoS) attack and a a [BSON Injection](https://snyk.io/vuln/SNYK-RUBY-MOPED-20222) attack.

## References

- http://rubysec.com/advisories/CVE-2015-4410
- http://sakurity.com/blog/2015/06/04/mongo_ruby_regexp.html
- https://access.redhat.com/security/cve/cve-2015-4410
- https://bugzilla.redhat.com/show_bug.cgi?id=1229757
- https://github.com/mongodb/bson-ruby/commit/976da329ff03ecdfca3030eb6efe3c85e6db9999
