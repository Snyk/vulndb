## Overview

[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker gaining read/write access to the filesystem, and executing arbitrary commands via a flaw in uploading & processing. This is that is due to the gem failing to restrict arbitrary commands to imagemagicks convert.

Related to [SNYK-RUBY-DRAGONFLY-20192](https://snyk.io/vuln/SNYK-RUBY-DRAGONFLY-20192)

## References
- http://rubysec.com/advisories/OSVDB-110439/
