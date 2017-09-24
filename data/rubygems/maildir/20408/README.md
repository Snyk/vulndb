## Overview
[`maildir`](https://rubygems.org/gems/maildir) is a ruby library for reading and writing arbitrary messages in DJB's maildir format.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `maildir` to version 2.2.0 or higher.

## References
- [Github PR](https://github.com/ktheory/maildir/pull/11)
- [Github Commit](https://github.com/ktheory/maildir/commit/8bd979c6440674d220d22e4d8d62d5bed7a3a425)
