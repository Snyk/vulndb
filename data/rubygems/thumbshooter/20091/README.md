## Overview
[`Thumbshooter`](https://rubygems.org/gems/thumbshooter) creates thumbshots of websites using webkit and qt4.
Affected versions of this gem are vulnerable to arbitrary command execution by a context-dependent attacker. `thumbshooter` fails to properly sanitize input passed to `thumbshooter.rb`. With a specially crafted URL that contains shell metacharacters, a context-dependent attacker can execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-1898
