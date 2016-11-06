## Overview
[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker executing arbitrary commands, due to a failure to properly escape a shell that contains injected characters.

Related to [SNYK-RUBY-DRAGONFLY-20017](https://snyk.io/vuln/SNYK-RUBY-DRAGONFLY-20017)

## References

- http://rubysec.com/advisories/OSVDB-97854
