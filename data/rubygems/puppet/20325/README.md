## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution. When making REST api calls, the puppet master takes YAML from an untrusted client, deserializes it, and then calls methods on the resulting object. An attacker may take advantage of this to craft a YAML payload that will cause the deserialization to construct an instance of any class in the ruby process and execute code from the payload.

## Remediation
Upgrade `puppet` to version 2.6.18, 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-3567/)
- [Github Commit 3.1.1](https://github.com/puppetlabs/puppet/commit/cb607d950b4841b956f977b32cb255c595a7b728)
- [Github Commit 2.7.21](https://github.com/puppetlabs/puppet/commit/79b875e941e24e6e28c594e2d102263ce63f1b9d)
- [Github Commit 2.6.18](https://github.com/puppetlabs/puppet/commit/b01c7287ac0b9ada04f5516afb49a81eac018130)
