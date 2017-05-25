## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Privilege Escalation die to the unsafe manner puppet uses temp files, allowing attackers to use a symlink attack and cause the puppet agent to overwrite something it did not intend to.

## Remediation
Upgrade `puppet` to version 2.7.25, 3.4.2 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-4969/)
- [GitHub PR 3.4.x](https://github.com/puppetlabs/puppet/pull/2203)
- [GitHub Commit 3.4.2](https://github.com/puppetlabs/puppet/pull/2203/commits/55cc322469464a16f9044e6fce6220e4ffd73ea2)
- [GitHub PR 2.7.25](https://github.com/puppetlabs/puppet/pull/2193)
- [GitHub Commit 2.7.25](https://github.com/puppetlabs/puppet/pull/2193/commits/3ea78cd21b2e9a96f9a482eb7ecde99b49848cd5)
