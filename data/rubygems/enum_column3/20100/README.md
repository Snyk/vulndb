## Overview
[`enum_column3`](https://rubygems.org/gems/enum_column3) enables enum type for MySQL db.
Affected versions of this gem are vulnerable to a denial of service (DoS) attack due to the program typecasting unexpected strings to symbols. This may allow a remote attacker to crash the program.

## References
- http://rubysec.com/advisories/OSVDB-94679
