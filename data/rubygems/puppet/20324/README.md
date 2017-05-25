## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Information Disclosure due to Insecure Defaults. By default, `auth.conf` allows any authenticated node to submit a report for any other node, which may lead to information disclosure.

For more information on Insecure defaults, see our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).
## Remediation
Upgrade `puppet` to version 2.6.18, 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-2275/)
- [Github Commit 3.1.1](https://github.com/puppetlabs/puppet/commit/b9023b0c919312df648e424f392aa88c9b081599)
- [Github Commit 2.7.21](https://github.com/puppetlabs/puppet/commit/632e12d24d460b6dfd5cd3b65b2ad6397f2a2193)
- [Github Commit 2.6.18](https://github.com/puppetlabs/puppet/commit/16fce8e6bd64d55fda9ddb3e45f682812f968815)
