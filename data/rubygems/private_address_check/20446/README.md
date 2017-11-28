## Overview
[`private_address_check`](https://rubygems.org/gems/private_address_check) checks if a IP or hostname would cause a request to a private network (RFC 1918).

Affected versions of the package are vulnerable to Server-side Request Forgery (SSRF). The SSRF filter contained a partial blacklist, and an attacker may be able to bypass the filter by supplying an address that was not blacklisted.

## Remediation
Upgrade `private_address_check` to version 0.4.1 or higher.

## References
- [GitHub Issue](https://github.com/jtdowney/private_address_check/pull/3)
- [GitHub Commit](https://github.com/jtdowney/private_address_check/commit/516ab853e788f1392f81b59cbe30e136f3836cdf)
