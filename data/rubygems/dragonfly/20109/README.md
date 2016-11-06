## Overview
[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker executing arbitrary commands, due to a failure to properly sanitize input passed via the `imagemagickutils.rb` script.

Related to [SNYK-RUBY-DRAGONFLY-20108](https://snyk.io/vuln/SNYK-RUBY-DRAGONFLY-20108)

## References
- http://rubysec.com/advisories/OSVDB-96798
- http://seclists.org/fulldisclosure/2013/Sep/18
- http://www.vapid.dhs.org/advisories/fog-dragonfly-0.8.2-cmd-inj.html
