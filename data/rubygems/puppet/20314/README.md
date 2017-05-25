## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Agent Impersonation, due to a flaw in setups where certnames are set to host IP addresses. If an authenticated host with a certname of an IP address changes IP addresses, and a second host assumes the first host's former IP address, the second host will be treated by the puppet master as the first one, giving the second host access to the first host's catalog.  

**Note:**  IP-based authentication is available via the `allow_ip` keyword in Puppet 3.x, but is not be disabled in prior versions. Using IP-based authentication in 2.7.x will result in a deprecation warning.

## Remediation
Upgrade `puppet` to version 2.7.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-3408/)
- [GitHub Commit 2.7.13](https://github.com/puppetlabs/puppet/commit/0d6d29933e613fe177e9235415919a5428db67bc)
- [GitHub Commit 2.6.15](https://github.com/puppetlabs/puppet/commit/568ded50ec6cc498ad32ff7f086d9f73b5d24c14)
