## Overview
[`show_in_browser`](https://rubygems.org/gems/show_in_browser) opens arbitrary text in your browser.
Affected versions of this gem do not validate input passed via the `/tmp/browser.html` file. This may allow a local attacker to create a specially crafted request that would execute arbitrary script code in a user's browser.

## References
- http://rubysec.com/advisories/OSVDB-93490
- http://osvdb.org/show/osvdb/93490
