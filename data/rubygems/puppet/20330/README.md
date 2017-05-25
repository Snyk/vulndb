## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Information Leakage.

In Apache 2.4, SSLCARevocationCheck directive was added to mod_ssl, which defaults it to none and must be explicitly configured. This setting enables checking of a certificate revocation list. The default Puppet master vhost config shipped with Puppet does not include this setting. If a Puppet master is set up to run with Apache 2.4, and this default vhost configuration file is used, the Puppet master will continue to honor a host's certificate even after it is revoked.

## Remediation
Upgrade `puppet` to version 3.6.2 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2014-3250/)
- [GitHub Commit 3.6.2](https://github.com/puppetlabs/puppet/commit/b02af7e05d9b9a3bc23474933d8d7f6cd6191158)
