## Overview
[`lingq`](https://rubygems.org/gems/lingq) is a gem for interacting with the API of lingq.com.
Affected versions of this gem contain a flaw in `client.rb` that is triggered when handling metacharacters. This may allow a remote attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-108585
