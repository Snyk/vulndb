## Overview
[`parallel_tests`](https://rubygems.org/gems/parallel_tests) is Run Test::Unit / RSpec / Cucumber / Spinach in parallel.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `parallel_tests` to version 0.10.0 or higher.

## References
- [Github PR](https://github.com/grosser/parallel_tests/pull/183)
- [Github Commit](https://github.com/grosser/parallel_tests/commit/d3dc7546664dccba0e78e6dba2f6b2ff78567f1e)
