## Overview
[`private_address_check`](https://rubygems.org/gems/private_address_check) checks if a IP or hostname would cause a request to a private network (RFC 1918).

Affected versions of the package are vulnerable to Server-side Request Forgery (SSRF). The `Resolv::getaddresses` class is OS-dependent, therefore by playing around with different IP formats one can return blank values. An attacker can abuse this bug in order to bypass the exclusion list.

## Remediation
Upgrade `private_address_check` to version 0.4.0 or higher.

## References
- [GitHub Issue](https://github.com/jtdowney/private_address_check/issues/1)
- [GitHub Commit](https://github.com/jtdowney/private_address_check/commit/58a0d7fe31de339c0117160567a5b33ad82b46af)
