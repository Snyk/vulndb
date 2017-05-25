## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable due to Insufficient Input Validation. The Common Name (CN) field in the Certificate Signing Request (CSR) is not properly validated and restricted. Requests containing specific ANSI control sequences may rewrite the order of text displayed to an administrator such that display of an invalid certificate and valid certificate are transposed. If the administrator signs the attacker’s certificate, the attacker can then man-in-the-middle the deployment’s agent nodes.

## Remediation
Upgrade `puppet` to version 2.6.17, 2.7.18 or higher.

## References
- [Puppet Security](https://puppet.com/security/cve/cve-2012-3867/)
- [GitHub Commit 2.7.18](https://github.com/puppetlabs/puppet/commit/f3419620b42080dad3b0be14470b20a972f13c50)
- [GitHub Commit 2.6.17](https://github.com/puppetlabs/puppet/commit/dfedaa5fa841ccf335245a748b347b7c7c236640)
- [Bugzilla Entry](https://bugzilla.redhat.com/show_bug.cgi?id=839158)
