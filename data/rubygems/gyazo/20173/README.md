## Overview
[`gyazo`](https://rubygems.org/gems/gyazo) is an API wrapper for gyazo.com.
Affected versions of this gem are vulnerable to arbitrary command execution via the `client.rb` script mishandling metacharacters.

## Remediation
Upgrade to version `>= 2.0.0` or greater.

## References
- http://rubysec.com/advisories/CVE-2014-4994
