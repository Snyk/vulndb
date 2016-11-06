## Overview
[`codders-dataset`](https://rubygems.org/gems/codders-dataset) is a simple API for creating and finding sets of data in your database, built on ActiveRecord.
Affected versions of this gem expose credential information in plaintext in the process table due to a flaw in `/lib/dataset/database/postgresql.rb`. This may allow a local attacker to gain access to credential information.

## References
- http://rubysec.com/advisories/CVE-2014-4991
