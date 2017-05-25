## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Unauthorized Endpoint Access due to not decoding correctly specific character combinations. Malicious users could potentially access endpoints otherwise restricted by `auth.conf` rules.

## Remediation
Upgrade `puppet` to version 4.4.2 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2014-3250/)
- [GitHub PR](https://github.com/puppetlabs/puppet/pull/4921)
