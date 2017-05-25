## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution due to unauthenticated clients permitted to send requests to the puppet master, and cause code to load unsafely.

**Notes:**
- This vulnerability only affects puppet masters running Ruby 1.9.3 and higher.

## Remediation
Upgrade `puppet` to version 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-1654/)
