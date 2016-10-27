## Overview
[`extlib`](https://rubygems.org/gems/extlib) is a support library for Merb.
Affected versions of this Gem are vulnerable to Remote Code Execution Attacks.

## Details
extlib Gem for Ruby contains a flaw that is triggered when a type casting error occurs during the parsing of parameters. This may allow a context-dependent attacker to potentially execute arbitrary code.


## References
- http://rubysec.com/advisories/CVE-2013-1802
