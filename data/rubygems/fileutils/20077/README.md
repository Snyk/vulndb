## Overview
[`fileutils`](https://rubygems.org/gems/fileutils) is a set of utility classes to extract meta data from different file types.
Affected versions of this gem are vulnerable to arbitrary file overwrite. It is possible for a local attacker to use a symlink attack against temporary files created by `files_utils.rb` to cause the program to unexpectedly overwrite an arbitrary file.

## References
- http://rubysec.com/advisories/OSVDB-90715
- http://osvdb.org/show/osvdb/90715
