## Overview
[`webbynode`](https://rubygems.org/gems/webbynode) is a Webbynode Deployment Gem.
Affected versions of this gem contain a flaw in `notify.rb` that is triggered when handling a specially crafted growlnotify message. This may allow a context-dependent attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-7086
