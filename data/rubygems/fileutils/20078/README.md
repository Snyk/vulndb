## Overview
[`fileutils`](https://rubygems.org/gems/fileutils) is a set of utility classes to extract meta data from different file types.
Affected versions of this gem are vulnerable to directory hijacking, due to the program not verifying the existence of a directory before attempting to create it. This may allow a local attacker to create the directory in advance, thus owning any files subsequently written to it.

## References
- http://rubysec.com/advisories/OSVDB-90716
