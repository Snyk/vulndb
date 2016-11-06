## Overview
[`lynx`](https://rubygems.org/gems/lynx) is a command line wrapper for MySQL.
Affected versions of this gem are vulnerable to arbitrary command executions due to a flaw in `lib/lynx/pipe/run.rb`.

## References
- http://rubysec.com/advisories/OSVDB-108579
