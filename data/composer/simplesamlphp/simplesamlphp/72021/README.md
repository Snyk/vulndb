## Overview
[simplesamlphp/simplesamlphp](https://simplesamlphp.org/) is an application written in native PHP that deals with authentication

Affected versions of this package are vulnerable to Information Exposure. An attacker may obtain sensitive information, gain unauthorized access, or have unspecified other impacts by leveraging incorrect persistent NameID generation when an Identity Provider (IdP) is misconfigured.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.14.11 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12873)
- [SimpleSAMLphp Security Advisory](https://simplesamlphp.org/security/201612-04)
- [Git Hub Commit](https://github.com/simplesamlphp/simplesamlphp/commit/90dca835158495b173808273e7df127303b8b953)
