## Overview
[`Curl`](https://rubygems.org/gems/curl) a gem that providees simple methods to use shell curl.
Affected versions of this gem are vulnerable to arbitrary command execution due to mishandling specially crafted inputs passed through the URL.  This may allow a context-dependent attacker to potentially execute arbitrary commands by injecting them via a semi-colon `;`.

## References
- http://rubysec.com/advisories/CVE-2013-2617
