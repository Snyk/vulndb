## Overview
[`delayed_job_active_record`](https://rubygems.org/gems/delayed_job_active_record) is backend for Delayed Job, originally authored by Tobias Lütke.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `delayed_job_active_record` to version 0.4.2 or higher.

## References
- [Github Commit](https://github.com/collectiveidea/delayed_job_active_record/commit/3436dd0921daff15e7e1f87f1da0384138c582cc)
