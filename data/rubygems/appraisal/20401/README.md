## Overview
[`appraisal`](https://rubygems.org/gems/appraisal) is integrates with bundler and rake to test your library against different versions of dependencies in repeatable scenarios called "appraisals.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `appraisal` to version 0.5.2 or higher.

## References
- [Github Commit](https://github.com/thoughtbot/appraisal/commit/edef3de11710aeee13b603f88d218bb3d47285e1)
