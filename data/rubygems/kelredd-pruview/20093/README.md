## Overview
[`kelredd-pruview`](https://rubygems.org/gems/kelredd-pruview) generates image previews (thumbnails) of various files.
Affected versions of this gem are vulnerable to arbitrary command execution via the `/lib/pruview/document.rb` script. The issue is triggered during the handling of a specially crafted file name that contains injected shell metacharacters.

## References
- http://rubysec.com/advisories/CVE-2013-1947
