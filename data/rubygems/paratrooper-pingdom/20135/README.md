## Overview
[`paratrooper-pingdom`](https://rubygems.org/gems/paratrooper-pingdom) sends deploy notifications to Pingdom service when deploying with Paratrooper.
Affected versions of this gem contain a script `/lib/paratrooper-pingdom.rb` that exposes the API key, username, and password for the API login by monitoring the process tree.

## References
- http://rubysec.com/advisories/CVE-2014-1233
