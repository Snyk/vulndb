## Overview
[`settingslogic`](https://rubygems.org/gems/settingslogic) is a simple and straightforward settings solution that uses an ERB enabled YAML file and a singleton design pattern.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
The fix is merged to the master branch but not yet published `settingslogic`.

## References
- [Github PR](https://github.com/binarylogic/settingslogic/pull/72)
- [Github Commit](https://github.com/settingslogic/settingslogic/commit/acb68b8b38f0493688a6ce70db204f26236a0061)
