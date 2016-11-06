## Overview
[`ldoce`](https://rubygems.org/gems/ldoce) is an API for the Longman Dictionary of Contemporary English.
Affected versions of this gem are vulnerable to arbitrary command execution by context-dependent attackers.
Specially crafted URL or filename for MP3 files that have shell metacharacters injected in to it are not properly handled.

## References
- http://rubysec.com/advisories/CVE-2013-1911
