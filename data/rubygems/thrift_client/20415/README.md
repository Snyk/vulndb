## Overview
[`thrift_client`](https://rubygems.org/gems/thrift_client) is a Thrift client wrapper that encapsulates some common failover behavior.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.
You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
The fix is merged to the master branch but not yet published for `thrift_client`.

## References
- [Github PR](https://github.com/twitter/thrift_client/pull/58)
- [Github Commit](https://github.com/twitter/thrift_client/commit/88d40817d4c4c55baa1f214d52b6879c5517b3a0)
