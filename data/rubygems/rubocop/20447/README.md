## Overview
[`RuboCop`](https://rubygems.org/gems/rubocop) is a ruby static code analyzer, based on the community Ruby style guide.
Affected version of the package store cache files in `/tmp/$UID/rubocop_cache/`. Since there are no ownership checks, a malicious local users could exploit this to tamper with cache files belonging to other users.

## References
- https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8418
- https://github.com/bbatsov/rubocop/issues/4336
- http://www.openwall.com/lists/oss-security/2017/05/01/14