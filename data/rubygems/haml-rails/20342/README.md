## Overview
[`haml-rails`](https://rubygems.org/gems/haml-rails) provides Haml generators for Rails 4.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Upgrade `haml-rails` to version 0.5 or higher.

## References
- [GitHub Commit](https://github.com/indirect/haml-rails/commit/6b7a5dead27957aff853b6c82b81fc13543c1aeb)
