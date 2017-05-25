## Overview
[`puma`](https://rubygems.org/api/v1/gems/puma.json) is a simple HTTP 1.1 server for Ruby/Rack applications.

Affected versions of the package are vulnerable to Man-in-the-Middle (MitM) attacks due to not explicitly enabling SSLv3. This vulnerability is also known as the POODLE attack.

## Remediation
Upgrade `puma` to version 2.9.2 or higher.

## References
- [GitHub PR](https://github.com/puma/puma/pull/590)
- [GitHub Commit](https://github.com/puma/puma/commit/8eee16d445c1c9a0b91f9fa0cab9c0f84c1b012c)
