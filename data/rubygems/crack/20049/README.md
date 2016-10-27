## Overview

[`crack`](https://rubygems.org/gems/crack) is a gem for parsing JSON and XML.

Affected versions of this gem are vulnerable because they do not properly restrict casts of string values. This may allow an attacker to execute arbitrary code, or cause a denial of service (DoS).

## References

- http://rubysec.com/advisories/CVE-2013-1800/
- https://github.com/rubysec/ruby-advisory-db/issues/25
