## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary Code Execution attacks. A malicious user who has access to agent SSL keys and file-creation permission may be able to create a file whose full pathname contains executable commands, then craft a file bucket request to execute these commands on the puppet master.

## Remediation
Upgrade `puppet` to version 2.6.15, 2.7.13 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1988/)
- [GitHub Commit 2.7.13](https://github.com/puppetlabs/puppet/commit/19bd30a35c0dcf01d58934413d7dabb7edfabd3f)
- [GitHub Commit 2.6.15](https://github.com/puppetlabs/puppet/commit/6bef2e622584d71e6643aeb6f852bb4773b84e9c)
