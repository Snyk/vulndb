## Overview
[`kajam`](https://rubygems.org/gems/kajam) is a lightweight content management system for middle and small teams.
Affected versions of this gem are vulnerable to arbitrary command execution due to a flaw in `/dataset/lib/dataset/database/postgresql.rb` that is triggered when handling metacharacters. This may allow a remote attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-108530
