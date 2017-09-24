## Overview
[`roodi`](https://rubygems.org/gems/roodi) is Roodi parses your Ruby code and warns you about design issues you have based on the checks that is has configured.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `roodi` to version 3.0.0 or higher.

## References
- [Github PR](https://github.com/roodi/roodi/pull/17)
- [Github Commit](https://github.com/roodi/roodi/commit/22d51ec815ed641d06b80786b5fae27f75e4dad1)
