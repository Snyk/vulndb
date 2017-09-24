## Overview
[`google-api-client`](https://rubygems.org/gems/google-api-client) is Client for accessing Google APIs.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `google-api-client` to version 0.7.0.rc1 or higher.

## References
- [Github PR](https://github.com/google/google-api-ruby-client/pull/43)
- [Github Commit](https://github.com/google/google-api-ruby-client/commit/c4c16ad68276522bb387371e47333ce499657df9)
