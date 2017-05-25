## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution. Any authenticated client could cause the hosting server to execute arbitrary code in response to a catalog request. A malicious user may specially craft this request to collect sensitive information on the server, by using the `template` or `inline_template` functions.

## Remediation
Upgrade `puppet` to version 2.6.18, 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-1640/)
- [GitHub Commit 3.1.1](https://github.com/puppetlabs/puppet/commit/cb607d950b4841b956f977b32cb255c595a7b728)
- [GitHub Commit 2.7.21](https://github.com/puppetlabs/puppet/commit/79b875e941e24e6e28c594e2d102263ce63f1b9d)
- [GitHub Commit 2.6.18](https://github.com/puppetlabs/puppet/commit/b01c7287ac0b9ada04f5516afb49a81eac018130)
