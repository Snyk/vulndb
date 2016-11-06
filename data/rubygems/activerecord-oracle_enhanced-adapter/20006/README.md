## Overview
[Oracle "enhanced" ActiveRecord adapter](https://rubygems.org/gems/activerecord-oracle_enhanced-adapter) contains useful additional methods for working with new and legacy Oracle databases.
Affected versions of this gem are vulnerable SQL injection attacks. The issue is due to the program not properly sanitizing user-supplied input related to the `:limit` and `:offset` functions. This may allow an attacker to inject or manipulate SQL queries in the back-end database, allowing for the manipulation or disclosure of arbitrary data.

## Remediation
Upgrade to version `>= 1.1.8` or greater.

## References
- http://rubysec.com/advisories/OSVDB-95376
