## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution. It is possible for a malicious attacker to spoof the `puppet` master by inserting the master's DNS alt names into the `Subject Alternative Name` field of the certificate.

## Remediation
Upgrade `puppet` to version 2.6.12, 2.7.6 or higher.

## References
- [Puppet Security](https://puppet.com/blog/important-security-announcement-altnames-vulnerability/)
- [GitHub PR](https://github.com/puppetlabs/puppet/pull/2848)
- [GitHub Commit 2.7.6](https://github.com/puppetlabs/puppet/commit/94345ebac6d79a890efc5f49e136c4f76ddda3ef)
- [GitHub Commit 2.6.12](https://github.com/puppetlabs/puppet/commit/bab9310d2800dd3c24e002f9d85c808ee38c9d3c)
