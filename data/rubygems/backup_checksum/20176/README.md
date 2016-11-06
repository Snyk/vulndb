## Overview
[backup_checksum](https://rubygems.org/gems/backup_checksum) is a clone of [backup](http://rubygems.org/gems/backup) with checksum added.

`backup_checksum` contains a flaw in `/lib/backup/cli/utility.rb`
that is triggered when handling metacharacters. This may allow a remote
attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-108570
