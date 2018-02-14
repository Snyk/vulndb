## Overview
[simplesamlphp/simplesamlphp](https://simplesamlphp.org/) is an application written in native PHP that deals with authentication.

Affected version of this package are vulnerable to Open Redirect.
An attacker may bypass an open redirect protection mechanism via crafted authority data in a URL.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.15.2 or higher.
## References
- [SimpleSAMLphp](https://simplesamlphp.org/security/201801-02)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-6520)
