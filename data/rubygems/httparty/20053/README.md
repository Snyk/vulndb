## Overview
[`httparty`](https://rubygems.org/gems/httparty) makes consuming restful web services easy.
Affected versions of this gem contains a flaw that is triggered when a type casting error occurs during the parsing of parameters. This may allow a context-dependent attacker to potentially execute arbitrary code.

## References
- http://rubysec.com/advisories/CVE-2013-1801
