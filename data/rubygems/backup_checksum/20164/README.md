## Overview
[backup_checksum](https://rubygems.org/gems/backup_checksum) is a clone of [backup](http://rubygems.org/gems/backup) with checksum added.

`backup_checksum` contains a flaw in `/lib/backup/cli/utility.rb` that displays password information in plaintext in the process list. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/OSVDB-108569
