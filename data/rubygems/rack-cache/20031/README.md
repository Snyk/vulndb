## Overview
[rack-cache](https://rubygems.org/gems/rack-cache) enables HTTP caching for Rack-based applications.
Affected versions of this gem contain a flaw related to the rubygem caching sensitive HTTP headers. This will result in a weakness that may make it easier for an attacker to gain access to a user's session via a specially crafted header.

## References
- http://rubysec.com/advisories/CVE-2012-2671
