## Overview
[`delayed_job`](https://rubygems.org/gems/delayed_job) encapsulates the common pattern of asynchronously executing longer tasks in the background. It is a direct extraction from Shopify where the job table is responsible for a multitude of core tasks.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `delayed_job` to version 4.0.0.beta1 or higher.

## References
- [Github Commit](https://github.com/collectiveidea/delayed_job/commit/03c34c4a9b41a5d5d7594457c7c25044d215dd63)
