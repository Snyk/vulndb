## Overview
[`fileutils`](https://rubygems.org/gems/fileutils) is a set of utility classes to extract meta data from different file types.
Affected versions of this gem are vulnerable to arbitrary command execution via a specially crafted URL containing a command after a delimiter (;). This allows a remote attacker to potentially execute arbitrary commands. The flaw is in the `/lib/file_utils/open_office.rb` script.

## References
- http://rubysec.com/advisories/OSVDB-90718
