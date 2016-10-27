## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Arbitrary Remote Code Execution. The issue is triggered when a type casting error occurs during the parsing of parameters. This may allow a remote attacker to potentially execute arbitrary code.

## References
- http://rubysec.com/advisories/CVE-2013-0156
