## Overview
[`kajam`](https://rubygems.org/gems/kajam) is a lightweight content management system for middle and small teams.
Affected versions of this gem expose the MySQL or PostgreSQL password in the process list, due to a flaw in `/dataset/lib/dataset/database/postgresql.rb`.  This may allow a local attacker to gain access to password information.


## References
- http://rubysec.com/advisories/CVE-2014-4999
