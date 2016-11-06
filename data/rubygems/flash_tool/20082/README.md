## Overview
[`flash_tool`](https://rubygems.org/gems/flash_tool) is a wrapper for swftool command line tool.

Affected versions of this gem contain a flaw that is triggered during the handling of downloaded files that contain shell characters. With a specially crafted file, a context-dependent attacker can execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-2513
