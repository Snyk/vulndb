## Overview
[`lawn-login`](https://rubygems.org/gems/lawn-login) is a small gem which provides a secure method of logging into the GATech LAWN network.
Affected versions of this gem expose password information in plaintext in the process table due to a flaw in `/lib/lawn.rb`. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/CVE-2014-5000
