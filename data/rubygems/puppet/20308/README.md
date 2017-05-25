## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Group Privilege Escalation. When executing commands as a different user, Puppet leaves the forked process with Puppet's own group permissions. This may allow untrusted code executed by a Puppet exec resource to be given unexpectedly high permissions.

## Remediation
Upgrade `puppet` to version 2.6.14, 2.7.11 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1053/)
- [Github Commit 2.6.14](https://github.com/puppetlabs/puppet/commit/76d0749f0a9a496b70e7dc7e6d6d6ff692224e36)
