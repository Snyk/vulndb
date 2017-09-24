## Overview
[`database_rewinder`](https://rubygems.org/gems/database_rewinder) is a minimalist's tiny and ultra-fast database cleaner.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.
You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
The fix is merged to the master branch but not yet published for `database_rewinder`.

## References
- [Github Commit](https://github.com/amatsuda/database_rewinder/commit/9a49522b8ae90ee70428cfc392291ad0a435e592)
