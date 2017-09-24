## Overview
[`simple_oauth`](https://rubygems.org/gems/simple_oauth) is Simply builds and verifies OAuth headers.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `simple_oauth` to version 0.3.0 or higher.

## References
- [Github Commit](https://github.com/laserlemon/simple_oauth/commit/bbba30621d26ddc4ae616a9262f69f3c9204e793)
