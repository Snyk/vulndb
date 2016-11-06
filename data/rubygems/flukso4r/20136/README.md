## Overview
[`flukso4r`](https://rubygems.org/gems/flukso4r) provides a library for the Flukso API.
Affected versions of this gem are vulnerable to arbitrary command executions due to a flaw in the `/lib/flukso/R.rb` causing the application to fail properly validating user-supplied input. This may allow a context-dependent attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-101577
