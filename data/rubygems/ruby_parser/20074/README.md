## Overview
[`ruby_parser`](https://rubygems.org/gems/ruby_parser) is a ruby parser written in pure ruby.

Vulnerable versions contain a flaw as `ruby_parser` creates temporary files insecurely. It is possible for a local attacker to use a symlink attack to cause the program to unexpectedly overwrite an arbitrary file.

## References
- http://rubysec.com/advisories/CVE-2016-5697/
- https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0162
