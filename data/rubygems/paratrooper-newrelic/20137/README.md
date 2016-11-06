## Overview
[`Paratrooper-newrelic`](https://rubygems.org/gems/paratrooper-newrelic) sends deploy notifications to Newrelic service when deploying with Paratrooper.
Affected versions of this gem contain a script `/lib/paratrooper-newrelic.rb` that exposes the API key, allowing a local attacker to gain access to it by monitoring the process tree.

## References
- http://rubysec.com/advisories/CVE-2014-1234/
