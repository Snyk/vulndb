## Overview
[`kcapifony`] is an open source tool for running scripts on multiple servers.
Affected versions of this gem displays password information in plaintext in the process list due to a flaw in `/lib/ksymfony1.rb`. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/OSVDB-108571
