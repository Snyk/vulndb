## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Remote Code Execution on agents configured to accept kick connections. If the agent has been configured to listen for incoming connections (`listen=true`), and the agent's `auth.conf` has been configured to allow access to the `run` REST endpoint, then a malicious user could construct an HTTP request which could execute arbitrary code.

**Notes:**
- This vulnerability is not present in the default configuration of puppet agents.
- The severity of this issue is exacerbated by the fact that puppet agents typically run as root.

## Remediation
Upgrade `puppet` to version 2.6.18, 2.7.21, 3.1.1 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2013-1653/)
- [Github Commit 3.1.1](https://github.com/puppetlabs/puppet/commit/f877cf5d63ea4b6d3bc110af6212e5187f900ee9)
- [Github Commit 2.7.21](https://github.com/puppetlabs/puppet/commit/0a7d61f3cc44e6e619e4ffb4db1953da646636bd)
- [Github Commit 2.6.18](https://github.com/puppetlabs/puppet/commit/ac44d87782e2145383d37a98f4e7dab09238bb76)
