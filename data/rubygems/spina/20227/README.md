## Overview
[`spina`](https://rubygems.org/gems/spina) is a content management system.
`Spina::ApplicationController` actions didn't have CSRF protection. This causes a CSRF vulnerability across the entire engine which includes administrative functionality such as creating users, changing passwords, and media management.

## References
- [Rubysec](http://rubysec.com/advisories/CVE-2015-4619)
- [Openwall](http://www.openwall.com/lists/oss-security/2015/06/16/11)
- [Github Commit](https://github.com/denkGroot/Spina/commit/bfe44f289e336f80b6593032679300c493735e75)
