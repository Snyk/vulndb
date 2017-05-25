## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Information Disclosure via the `last_run_report.yaml` file, which has global read permission. This file may contain sensitive information that can aid an attacker to execute an attack.

## Remediation
Upgrade `puppet` to version 2.7.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-3866/)
- [GitHub Commit 2.7.18](https://github.com/puppetlabs/puppet/commit/fd44bf5e6d0d360f6a493d663b653c121fa83c3f)
- [Bugzilla Entry](https://bugzilla.redhat.com/show_bug.cgi?id=839135)
