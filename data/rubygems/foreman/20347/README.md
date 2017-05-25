## Overview
[`foreman`](https://rubygems.org/gems/foreman) is Process manager for applications with multiple components.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The remote execution plugin runs commands on hosts over SSH from the Foreman web UI. When a job is submitted that contains HTML tags, the console output shown in the web UI does not escape the output causing any HTML or JavaScript to run in the user's browser. The output of the job is stored, making this a stored XSS vulnerability.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `foreman` to version 1.2.2 or higher.

## References
- [GitHub PR](https://github.com/theforeman/foreman_remote_execution/pull/208)
- [GitHub Commit](https://github.com/theforeman/foreman_remote_execution/pull/208/commits/9a6561214d749f17f03569444cd0b72a61bd5853)
- [Redhat Bugzilla Issue](https://bugzilla.redhat.com/show_bug.cgi?id&#x3D;1387232)
