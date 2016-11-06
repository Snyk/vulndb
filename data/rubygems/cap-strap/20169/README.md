## Overview
[`cap-strap`](https://rubygems.org/gems/cap-strap) is a bootstrap for machines.
Affected versions of this gem use a hardcoded default `sa` salt for password encryption. This may allow a local attacker to more easily decrypt passwords.

## References
- http://rubysec.com/advisories/OSVDB-108575
