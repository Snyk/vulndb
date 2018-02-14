## Overview
[puppet](https://rubygems.org/gems/puppet) is an automated administrative engine for your Linux, Unix, and Windows systems, performs administrative tasks based on a centralized specification.

Affected versions of this package are vulnerable to Insecure Permissions. It was possible to install a module with world writable permissions.

## Remediation
Upgrade `puppet` to version 5.3.4 or higher.

## References
- [Puppet Security Advisor](https://puppet.com/security/cve/CVE-2017-10689)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-10689)
