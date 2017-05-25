## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary Code Execution. An attacker could have Puppet execute malicious code by convincing a privileged user to change directories to one containing the malicious code and then run Puppet.

**Note:** On platforms with Ruby 1.9.1 or earlier.

## Remediation
Upgrade `puppet` to version 2.7.26, 3.6.2 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2014-3248/)
- [GitHub Commit 3.6.2](https://github.com/puppetlabs/puppet/commit/1d1e1eac451fdd277ff1601b3fb635dcb713c7be)
- [GitHub Commit 2.7.26](https://github.com/puppetlabs/puppet/commit/4b5586b2d54234dc98d32f4c8d8bf4ecca59022d)
