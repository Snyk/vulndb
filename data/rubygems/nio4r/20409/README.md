## Overview
[`nio4r`](https://rubygems.org/gems/nio4r) is Cross-platform asynchronous I/O primitives for scalable network clients and servers. Inspired by the Java NIO API, but simplified for ease-of-use.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `nio4r` to version 0.4.4 or higher.

## References
- [Github PR](https://github.com/socketry/nio4r/pull/25)
- [Github Commit](https://github.com/socketry/nio4r/commit/8595dc4e5265ab9e97b37dac13ae1708cc822bb6)
