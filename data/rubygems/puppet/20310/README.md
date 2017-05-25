## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary Package Installation. During package installation for Mac OS X, A predictable filename is used in the `/tmp` folder. It is possible for an attacker to await this filename and create a symlink to overwrite arbitrary files or instal arbitrary packages.

## Remediation
Upgrade `puppet` to version 2.6.15, 2.7.13 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1906/)
- [Github Commit 2.7.13](https://github.com/puppetlabs/puppet/commit/46e8dc06aa31426ec3bf5203e46107d72a9ba398)
- [Github Commit 2.6.15](https://github.com/puppetlabs/puppet/commit/c51447dfa81c9751fdc7663e0e91a9c9238abcaa)
