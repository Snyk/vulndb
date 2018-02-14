## Overview
[`sorcery`](https://rubygems.org/gems/sorcery) Provides common authentication needs such as signing in/out, activating by email and resetting password.

Affected versions of the package are vulnerable to Authorization Bypass. The `state` field was kept between requests.

## Remediation
Upgrade `sorcery` to version 0.9.1 or higher.

## References
- [Github Commit](https://github.com/NoamB/sorcery/commit/457f89d10ed5efc0c3dccea0dd78587bfd5bf211)
