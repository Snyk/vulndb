# Overview
Affected versions of [`simplesamlphp/simplesamlphp`](https://packagist.org/packages/simplesamlphp/simplesamlphp) are vulnerable to Invalid Token Creation and Validation.

The SimpleSAML_Auth_TimeLimitedToken class in SimpleSAMLphp 1.14.14 and earlier allows attackers with access to a secret token to extend its validity period by manipulating the prepended time offset.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.14.15 or higher.

## References
- [SimpleSaml Security Advosiry](https://simplesamlphp.org/security/201708-01)
