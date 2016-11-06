## Overview
[`screen_capture`](https://rubygems.org/gems/screen_capture) captures screenshots of web pages.
Affected versions of this gem are contain a flaw in `screen_capture.rb` that is triggered when handling input passed via the URL. This may allow a context-dependent attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-107783
