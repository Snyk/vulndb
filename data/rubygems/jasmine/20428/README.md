## Overview
[`jasmine`](https://rubygems.org/gems/jasmine) is Testing your JavaScript without any framework dependencies, in any environment, and with a nice descriptive syntax.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `jasmine` to version 2.0.2 or higher.

## References
- [Github PR](https://github.com/jasmine/jasmine-gem/pull/213)
- [Github Commit](https://github.com/jasmine/jasmine-gem/commit/e2105b71aee65386d0d083e4b64c49892d0d6caa)
