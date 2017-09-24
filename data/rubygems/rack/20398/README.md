## Overview
[`rack`](https://rubygems.org/gems/rack)  provides a minimal, modular and adaptable interface for developing web applications in Ruby.

Affected versions of the package are vulnerable to Regular Expression Denial of Service (ReDoS).
You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `rack` to version 1.3.4 or higher.

## References
- [Github PR](https://github.com/rack/rack/pull/242)
- [Github Commit](https://github.com/rack/rack/commit/89c961bf71e93021c42524727409d97e2a4bfccd)
