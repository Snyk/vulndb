## Overview
[puppet](https://rubygems.org/gems/puppet) is an automated administrative engine for your Linux, Unix, and Windows systems, performs administrative tasks based on a centralized specification.

Affected versions of this package are vulnerable to Information Exposure. It was possible for the agent to retrieve facts from an environment that it was not classified to retrieve from.

## Remediation
Upgrade `puppet` to version 5.3.4 or higher.


## References
- [Puppet Security Advisor](https://puppet.com/security/cve/CVE-2017-10690)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-10690)
