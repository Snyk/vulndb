## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Information Disclosure due to the Puppet Module Tool (PMT) not properly controlling permissions of modules it installed, if those permissions were used when the modules were originally built. This might allow attackers to read or modify those modules depending on the original permissions.

## Remediation
Upgrade `puppet` to version 2.7.23, 3.2.4 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-4956/)
- [Github Commit 3.2.4](https://github.com/puppetlabs/puppet/commit/fe7b9f0e0376cd17f12d4512f2cbf4519b3aa1ef)
- [Github Commit 2.7.23](https://github.com/puppetlabs/puppet/commit/90d41809f9d8283fd1dcd9e516d051e5d4d58067)
