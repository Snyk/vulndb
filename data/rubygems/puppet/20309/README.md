## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Local User Privilege Escalation `.k5login` file. The k5login type is typically used to manage a file in the home directory of a user. The purpose of this file is to allow access to other users.

If a user's `.k5login` file was replaced with a symlink, Puppet will overwrite the link's target when managing that user's login file with the `k5login` resource type. This allows local privilege escalation by linking a user's `.k5login` file to root's `.k5login` file.

## Remediation
Upgrade `puppet` to version 2.6.14, 2.7.11 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1053/)
- [Github Commit 2.6.14](https://github.com/puppetlabs/puppet/commit/146953861e007a91545fdbd0ea59ab3509326e09)
