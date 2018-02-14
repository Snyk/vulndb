## Overview
[`yard`](https://rubygems.org/gems/yard) is a documentation generation tool for the Ruby programming language.

Affected versions of this packafge are vulnerable to Directory Traversal.

`lib/yard/core_ext/file.rb` in the server in YARD before 0.9.11 does not block relative paths with an initial ../ sequence, which allows attackers to conduct directory traversal attacks and read arbitrary files.

## References
- [GitHub Commit](https://github.com/lsegal/yard/commit/b0217b3e30dc53d057b1682506333335975e62b4)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-17042)
