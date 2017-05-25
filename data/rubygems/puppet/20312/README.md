## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Denial of Service (DoS) attacks.

- By using the symlink vulnerability described in [CVE-2012-1986](https://snyk.io/vuln/SNYK-RUBY-PUPPET-20311), it is possible to create a `memory consumption DoS` attack, due to the way Puppet sends files via REST requests, the thread handling the request will block forever.
- A `filesystem DoS` attack is possible by constructing a marshaled form of a `Puppet::FileBucket::File` object, a malicious user can craft a REST request to have this object written to any place in the filesystem and fill it.

## Remediation
Upgrade `puppet` to version 2.6.15, 2.7.13 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-1987/)
- [Github Commit 2.7.13](https://github.com/puppetlabs/puppet/commit/91e7ce478649490d87684661f79d70b5ca46ddd0)
- [Github Commit 2.6.15](https://github.com/puppetlabs/puppet/commit/568ded50ec6cc498ad32ff7f086d9f73b5d24c14)
