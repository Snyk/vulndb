## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary File Access on the puppet master. If an attacker has a valid SSL certificate and private key, they could construct an HTTP GET request to return the contents of an arbitrary file on the puppet master, leading to information leakage.

## Remediation
Upgrade `puppet` to version 2.6.17, 2.7.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-3864/)
- [Github Commit 2.7.18](https://github.com/puppetlabs/puppet/commit/10f6cb8969b4d5a933b333ecb01ce3696b1d57d4)
- [Github Commit 2.6.17](https://github.com/puppetlabs/puppet/commit/c3c7462e4066bf3a563987a402bf3ddf278bcd87)
