## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Directory Traversal when the `auth.conf` file enables deletion. An attacker may craft a Delete request and arbitrarily delete files on the puppet master and potentially cause a Denial of Service (DoS).

## Remediation
Upgrade `puppet` to version 2.6.17, 2.7.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-3865/)
- [GitHub Commit 2.7.18](https://github.com/puppetlabs/puppet/commit/d80478208d79a3e6d6cb1fbc525e24817fe8c4c6)
- [GitHub Commit 2.6.17](https://github.com/puppetlabs/puppet/commit/554eefc55f57ed2b76e5ee04d8f194d36f6ee67f)
