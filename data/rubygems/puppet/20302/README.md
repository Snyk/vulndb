## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Directory Traversal via the SSLFile indirection base class. An Attacker could write any valid X.509 Certificate Signing Request at any location on the disk.

## Remediation
Upgrade `puppet` to version 2.6.10, 2.7.4 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2011-3848)
- [GitHub Commit 2.7.4](https://github.com/puppetlabs/puppet/commit/c275a518d10bc9ef87d330c052cdc3d6f4241942)
- [GitHub Commit 2.6.10](https://github.com/puppetlabs/puppet/commit/fe2de817b43a427a3c6fd629c5e13949b222ac34)
