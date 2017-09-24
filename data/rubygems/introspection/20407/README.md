## Overview
[`introspection`](https://rubygems.org/gems/introspection) is Dynamic inspection of the hierarchy of method definitions on a Ruby object.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `introspection` to version 0.0.3 or higher.

## References
- [Github Commit](https://github.com/floehopper/introspection/commit/677b6c2f698d219771d329be2f45f8b64915c7dc)
