## Overview
[`fastreader`](https://rubygems.org/gems/fastreader) is a terminal-based feed reader.
Affected versions of this gem are vulnerable to arbitrary command execution due to mishandling of specially crafted input passed via a URL that contains a `;` character. This may allow a context-dependent attacker to potentially execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-2615
