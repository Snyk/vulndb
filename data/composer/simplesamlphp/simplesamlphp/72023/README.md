## Overview
[simplesamlphp](https://simplesamlphp.org/) is an application written in native PHP that deals with authentication.

Affected versions of this package are vulnerable to Security Bypass.
An attacker can leverage this vulnerability to impersonate any user from any SAML 1 Identity Provider trusted by a SimpleSAMLphp Service Provider, with the only pre-requisite of a valid assertion previously sent to the affected Service Provider.

## Remediation
Upgrade `simplesamlphp` to version 1.14.17 or higher.

SRC
simplesamlphp/simplesamlphp/CVE-2017-18122
## References
- [SimpleSAMLphp Security Advisory](https://simplesamlphp.org/security/201710-01)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-18122)
