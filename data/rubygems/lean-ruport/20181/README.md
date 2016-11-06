## Overview
[`lean-ruport`](https://rubygems.org/gems/lean-ruport) is a  report generation engine that allows users to generate custom ERb templates and easily query various forms of SQL databases via DBI.
Affected versions of this gem are vulnerable due to the `/test/tc_database.rb` script exposing MySQL password information in plaintext in the process table. This may allow a local attacker to gain access to MySQL password information.

## References
- http://rubysec.com/advisories/CVE-2014-4998
