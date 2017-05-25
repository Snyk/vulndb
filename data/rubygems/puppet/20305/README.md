## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary Code Execution. When in `edit` mode, Puppet resources use an extremely predictable file name. An Attacker may be able to trick the user into editing the files and running them with a symlink.

## Remediation
Upgrade `puppet` to version 2.6.11, 2.7.5 or higher.

## References
- [Puppet Google Group](https://groups.google.com/forum/#!topic/puppet-announce/keO0bSMoocs)
- [Github Commit 2.7.5](https://github.com/puppetlabs/puppet/commit/d76c30935460ded953792dfe49f72b8c5158e899)
- [Github Commit 2.6.11](https://github.com/puppetlabs/puppet/commit/343c7bd381b63e042d437111718918f951d9b30d)
