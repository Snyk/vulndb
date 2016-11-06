## Overview
[sprout](https://rubygems.org/gems/sprout)  is a modular set of tools that take the tedium and frustration out of creating and managing programming projects by automatically installing and configuring external tools, libraries, commands and build tasks.
Affected versions of this gem are vulnerable to arbitrary code execution due to a flaw in the `unpack_zip()` function in `archive_unpacker.rb`. The program fails to properly sanitize input passed via the `zip_file`, `dir`, `zip_name`, and `output` parameters which may allow a context-dependent attacker to execute arbitrary code.

## References
- http://rubysec.com/advisories/CVE-2013-6421
