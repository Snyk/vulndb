## Overview
[`builder`](https://rubygems.org/gems/builder) provides a number of builder objects that make creating structured data simple to do.
Affected version of this gem mishandles reading tag names from XML data and then calls a method with the same name. With a specially crafted file, a context-dependent attacker can call private methods and manipulate data.

## References
- http://rubysec.com/advisories/OSVDB-95668
