## Overview
`xaviershay-dm-rails` allows datamapper to hook into rails3.

Affected versions call `mysql` while exposing the DB connection password on the command line, making it available via the process table. An attacker with access to the server running this application is capable of intercepting the password with `while (true) do ps -ef | grep [p]assword; done`.

## References
- http://rubysec.com/advisories/CVE-2015-2179/
- https://packetstormsecurity.com/files/130484/xdr-disclose.txt
