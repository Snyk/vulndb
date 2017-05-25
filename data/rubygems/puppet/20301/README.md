## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Information Disclosure when missing an `auth.conf` file in `/etc/puppet`. This attack may be possible only for an attacker with SSL credentials from another node.

## Remediation
Upgrade `puppet` to version 2.6.8 or higher.

## References
- [Puppet Mail Archive](https://bugzilla.redhat.com/show_bug.cgi?id=502881)
