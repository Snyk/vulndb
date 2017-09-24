## Overview
[`bourne`](https://rubygems.org/gems/bourne)is extends mocha to allow detailed tracking and querying of stub and mock invocations.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `bourne` to version 1.4.0 or higher.

## References
- [Github PR](https://github.com/thoughtbot/bourne/pull/27)
- [Github Commit](https://github.com/thoughtbot/bourne/commit/7557ea2c4d0fc7ce6727547fc206674a494f558f)
