## Overview
[`fluentd`](https://rubygems.org/api/v1/gems/fluentd.json) is an open source data collector designed to scale and simplify log management. It can collect, process and ship many kinds of data in near real-time.

Affected versions of the package are vulnerable to Insecure Randomness.
Random number generator used by OpenSSL produce predictable values and should not be used in security-sensitive context.

## Remediation
Upgrade `fluentd` to version 0.14.12 or higher.

## References
- [GitHub Commit](https://github.com/fluent/fluentd/commit/6e117cb3d27e288c5a86cb95a505b78168dd203f)
