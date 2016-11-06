## Overview
[`point-cli`](https://rubygems.org/gems/point-cli) is a CLI client for the PointHQ DNS Hosting System.
Affected versions of this gem exposes credential information in plaintext in the process table due to a flaw in `/lib/commands/setup.rb`. This may allow a local attacker to gain access to credential information.

## References
- http://rubysec.com/advisories/CVE-2014-4997
