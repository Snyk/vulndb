## Overview
[`karo`](https://rubygems.org/gems/karo) is an SSH toolbox to make running logs, sync, cache commands easier for a given rails app.
Affected versions of this gem are vulnerable to an arbitrary command execution attack via the `db.rb` script that contains a flaw triggered when handling metacharacters.  

## References
- http://rubysec.com/advisories/OSVDB-108573
