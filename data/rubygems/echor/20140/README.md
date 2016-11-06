## Overview
[`Echor`](https://rubygems.org/gems/echor) is a wrapper for echo.
Affected versions of this gem contain a flaw in `backplane.rb` in the `perform_request` function that is triggered when a semi-colon `;` is injected into a username or password. This may allow a context-dependent attacker to inject arbitrary commands if the gem is used in a rails application.

## References
- http://rubysec.com/advisories/CVE-2014-1834
