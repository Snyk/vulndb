## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution via the `resource_type` service. An attacker could cause puppet to load arbitrary Ruby files from the puppet master node’s file system.

**Note:** This behavior is not enabled by default, but could be enabled in the `auth.conf` file.

## Remediation
Upgrade `puppet` to version 2.7.23, 3.2.4 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-4761/)
- [GitHub PR](https://github.com/puppetlabs/puppet/pull/1810)
- [GitHub Commit 3.2.4](https://github.com/puppetlabs/puppet/commit/a177c9d333b052c4d81d09ae2538bd5393612c69)
- [GitHub Commit 2.7.23](https://github.com/puppetlabs/puppet/commit/13a3048994b19e22c13ac32da8eb15af5cfea954)
