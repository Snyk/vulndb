## Oerview
sprout Gem for Ruby contains a flaw in the unpack_zip() function in
archive_unpacker.rb. The issue is due to the program failing to properly
sanitize input passed via the 'zip_file', 'dir', 'zip_name', and 'output'
parameters. This may allow a context-dependent attacker to execute arbitrary
code.


## References
- http://rubysec.com/advisories/OSVDB-100598
- http://www.osvdb.org/show/osvdb/100598
