## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Arbitrary File Access via Symlink Attack. Puppet creates temporary files in `/tmp` with predictable names. These could be used by an attacker to cause a Denial of Service (DoS) attack by setting a symlink to some other file and waiting for puppet to overwrite it.

## Remediation
Upgrade `puppet` to version 2.6.4 or higher.

## References
- [Bugzilla Issue](http://www.mail-archive.com/puppet-users@googlegroups.com/msg16429.html)
- [GitHub Commit 0.25.2](https://github.com/MarkusQ/puppet/commit/0e9db34ba0afe0ea0bee3afd005a011e3099d055)
