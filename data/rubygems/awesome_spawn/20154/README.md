## Overview
[`awesome_spawn`](https://rubygems.org/gems/awesome_spawn) extends Ruby's Kernel.spawn.

Affected versions carry a vulnerability that allows crafted malicious input to execute shell commands. 

*Example:*
```ruby
AwesomeSpawn.run('ls', :params => {'-l' => "; touch haxored"})`
```

## References
- http://rubysec.com/advisories/CVE-2014-0156
- https://github.com/ManageIQ/awesome_spawn/commit/e524f85f1c6e292ef7d117d7818521307ac269ff
