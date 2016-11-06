## Overview
[`fog-dragonfly`](https://rubygems.org/gems/fog-dragonfly) is an on-the-fly Rack-based image handling framework.
This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker executing arbitrary commands, due to a failure to properly escape a shell that contains injected characters.

Related to [SNYK-RUBY-DRAGONFLY-20016](https://snyk.io/vuln/SNYK-RUBY-DRAGONFLY-20016)

## References
- http://rubysec.com/advisories/OSVDB-97854
