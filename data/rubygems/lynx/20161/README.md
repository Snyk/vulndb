## Overview
[`lynx`](https://rubygems.org/gems/lynx) is a command line wrapper for MySQL.
Affected versions of this gem are vulnerable due to a flaw in `command/basic.rb` that exposes password information in plaintext in the process table. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/CVE-2014-5002
