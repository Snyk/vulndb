## Overview
[`faraday_middleware`](https://rubygems.org/gems/faraday_middleware) is Various middleware for Faraday.
Affected versions of the package are vulnerable to Arbitrary Code Injection via the `YAML.load()` function.

## Remediation
There is no fix version for `faraday_middleware`.

## References
- [Github Issue](https://github.com/lostisland/faraday_middleware/issues/92)
- [Github Commit](https://github.com/lostisland/faraday_middleware/commit/179d0972598cec6cf063e2db4cc335986aa56cf3)
