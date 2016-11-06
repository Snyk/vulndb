## Overview
[`Kafo`](https://rubygems.org/gems/kafo) is a gem for making puppet-based installations user friendly.
Affected versions of this gem are vulnerable to sensitive information exposure due to the program using insecure world-readable permissions for the `default_values.yaml` file. This may allow a local attacker to gain access to password and other unspecified sensitive information located within the file.

## References
- http://rubysec.com/advisories/CVE-2014-0135
