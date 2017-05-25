## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Security Bypass vis SSL Protocol Downgrade to SSLv2. A client negotiating a connection could downgrade the master's SSL protocol to SSLv2.

**Notes:**
- This issue only affects systems running older versions (pre 1.0.0) of openSSL.

## Remediation
Upgrade `puppet` to version 2.6.18, 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-1654/)
- [GitHub Commit 3.1.1](https://github.com/puppetlabs/puppet/commit/52be043933d40aab3449214f2aa602ceb214f91e)
- [GitHub Commit 2.7.21](https://github.com/puppetlabs/puppet/commit/be920acdb4762f6d813a29065ba210aef3ef612a)
- [GitHub Commit 2.6.18](https://github.com/puppetlabs/puppet/commit/add9998c2f7c49c1eabf846566c0272a5f931f45)
