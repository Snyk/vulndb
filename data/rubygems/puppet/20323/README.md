## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution when using the default configuration or when enabling `puppet kick`. An authenticated agent could craft an HTTP PUT request to run arbitrary code on the master.

## Remediation
Upgrade `puppet` to version 2.6.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-2274/)
- [Github Commit 2.6.x](https://github.com/puppetlabs/puppet/commit/b01c7287ac0b9ada04f5516afb49a81eac018130)
