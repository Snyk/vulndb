## Overview
[`faraday_middleware`](https://rubygems.org/gems/faraday_middleware) is a middleware for Faraday.

Affected versions of the package are vulnerable to Arbitrary Code Injection via the `YAML.load()` function.

## Remediation
Upgrade `faraday_middleware` to version 0.12.0 or higher.

## References
- [Aaron Patterson's Blog](http://tenderlovemaking.com/2013/02/06/yaml-f7u12.html)
- [GitHub Issue](https://github.com/lostisland/faraday_middleware/issues/92)
- [GitHub Commit](https://github.com/lostisland/faraday_middleware/commit/179d0972598cec6cf063e2db4cc335986aa56cf3)
