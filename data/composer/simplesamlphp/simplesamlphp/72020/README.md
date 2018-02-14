## Overview
[simplesamlphp/simplesamlphp](https://simplesamlphp.org/) is an application written in native PHP that deals with authentication.

Affected version of this package are vulnerable to Authentication Bypass. An attacker may authenticate with any account and a random password, provided that the original password is stored in an `htpasswd` file and hashed using the crypt() algorithm.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to versions 1.14.14 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12868)
- [SimpleSAMLphp Security Advisory](https://simplesamlphp.org/security/201705-01)
- [Git Hub Commit](https://github.com/simplesamlphp/simplesamlphp/commit/4bc629658e7b7d17c9ac3fe0da7dc5df71f1b85e)
