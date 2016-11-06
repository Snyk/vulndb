## Overview
[`gnms`](https://rubygems.org/gems/gnms) is a graphical tool used to monitor state of network elements.
Affected versions of this gem are vulnerable to arbitrary code executions via the `/lib/cmd_parse.rb` script. The flaw is triggered when handling shell metacharacters passed via the `ip` variable.

## References
- http://rubysec.com/advisories/OSVDB-108594
