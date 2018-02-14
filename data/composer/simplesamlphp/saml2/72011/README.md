## Overview
[simplesamlphp/saml2](https://packagist.org/packages/simplesamlphp/saml2) is a library from SimpleSAMLphp.

Affected versions of this package are vulnerable to Denial of Service (DoS).
The attacker may send a large number of digits as the fraction of a second in a timestamp, and make the processing script choke while evaluating the regular expression.

## Remediation
Upgrade `simplesamlphp/saml2` to versions 1.10.4, 2.3.5, 3.1.1 or higher.

 
## References
- [SimpleSAMLphp](https://simplesamlphp.org/security/201801-01)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-6519)
