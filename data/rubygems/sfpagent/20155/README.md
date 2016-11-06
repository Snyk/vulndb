## Overview
[`sfpagent`](https://rubygems.org/gems/sfpagent) is a ruby implementation of SFP agent. Affected versions of this gem are vulnerable to context-dependent attackers to execute arbitrary commands, due to no proper sanitization in the `JSON[body]` when handling module names with shell metacharacters.

## References
- http://rubysec.com/advisories/CVE-2014-2888
