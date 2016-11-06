## Overview
[`Features`](https://rubygems.org/gems/features) is a plaintext user-stories parser supporting native programming languages.

Affected versions of this gem are vulnerable to a local cross-site scripting  (XSS) attack due to no validation on certain inputs upon submission to `/tmp/out.html`. This may allow an attacker to create a specially crafted request that would execute arbitrary script code in a user's browser within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/CVE-2013-4318
