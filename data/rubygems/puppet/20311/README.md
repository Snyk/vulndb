## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary File Read Access. A malicious user with an authorized SSL key and can create symlinks on the puppet master, may thus read any file that the puppet master has access to. This is because a design flaw in puppet, when issuing a REST request for a file from a remote filebucket, it can override the puppet master’s defined location for filebucket storage.

## Remediation
Upgrade `puppet` to version 2.6.15, 2.7.13 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1986/)
- [GitHub Commit 2.7.13](https://github.com/puppetlabs/puppet/commit/0d6d29933e613fe177e9235415919a5428db67bc)
- [GitHub Commit 2.6.15](https://github.com/puppetlabs/puppet/commit/568ded50ec6cc498ad32ff7f086d9f73b5d24c14)
