## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Symlink Attack via a user's SSH `authorized_keys` field. A TOCTOU (time-of-check-to-time-of-use) race vulnerability was present in the `ssh_authorized_key` type. When the target file and directory did not exist, each of them would be created as root and later chowned to the user. This made it possible to replace either one with a symlink to an arbitrary file, which would then become owned by that user. This would allow local privilege escalation to root through standard TOCTOU attack techniques.

## Remediation
Upgrade `puppet` to version 2.6.11, 2.7.5 or higher.

## References
- [Puppet Google Group](https://groups.google.com/forum/#!topic/puppet-announce/keO0bSMoocs)
- [Github Commit 2.7.5](https://github.com/puppetlabs/puppet/commit/7d4c169df84fc7bbeb2941bf995a63470f71bdbd)
- [Github Commit 2.6.11](https://github.com/puppetlabs/puppet/commit/b29b1785d543a3cea961fffa9b3c15f14ab7cce0)
