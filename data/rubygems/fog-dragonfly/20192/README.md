## Overview
[`fog-dragonfly`](https://rubygems.org/gems/fog-dragonfly) is an on-the-fly Rack-based image handling framework.
This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker gaining read/write access to the filesystem, and executing arbitrary commands via a flaw in uploading & processing. This is that is due to the gem failing to restrict arbitrary commands to imagemagicks convert.

Related to [SNYK-RUBY-DRAGONFLY-20193](https://snyk.io/vuln/SNYK-RUBY-DRAGONFLY-20193)

## References
- http://rubysec.com/advisories/OSVDB-110439
- http://osvdb.org/show/osvdb/110439
