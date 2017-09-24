## Overview
[`excon`](https://rubygems.org/gems/excon) is Extended http(s) CONnections.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `excon` to version 0.55.0 or higher.

## References
- [Github PR](https://github.com/excon/excon/pull/616)
- [Github Commit](https://github.com/excon/excon/commit/be9f4f2c4419f1b826c503f2a4063f3073802a59)
