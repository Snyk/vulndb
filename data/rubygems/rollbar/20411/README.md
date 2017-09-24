## Overview
[`rollbar`](https://rubygems.org/gems/rollbar.) is Easy and powerful exception tracking for Ruby.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `rollbar` to version 2.5.0 or higher.

## References
- [Github PR](https://github.com/rollbar/rollbar-gem/pull/320)
- [Github Commit](https://github.com/rollbar/rollbar-gem/commit/f97b47a97904909a73c7b82cbe79cffbe3eb2c37)
