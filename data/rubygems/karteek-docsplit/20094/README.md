## Overview
Karteek Docsplit contains a flaw that is due to the program failing to properly sanitize input passed to `text_extractor.rb`. With a specially crafted file name that contains shell metacharacters, a context-dependent attacker can execute arbitrary commands

## References
- http://rubysec.com/advisories/CVE-2013-1933
