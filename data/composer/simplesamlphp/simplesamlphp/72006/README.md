## Overview
[simplesamlphp/simplesamlphp](https://simplesamlphp.org/security/201704-01) is an application written in native PHP that deals with authentication.

Affected version of this package are vulnerable to Information Exposure.
Man-in-the-middle attackers may obtain sensitive information by leveraging use of the aesEncrypt and aesDecrypt methods in the SimpleSAML/Utils/Crypto class to protect session identifiers in replies to non-HTTPS service providers.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.14.13 or higher.
## References
- [SimpleSAMLphp](https://simplesamlphp.org/security/201704-01)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12870)
