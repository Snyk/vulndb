## Overview
[rg.hibernate.validator:hibernate-validator](https://github.com/hibernate/hibernate-validator) is the reference implementation of JSR-380 - Bean Validation 2.0.

Affected versions of this package are vulnerable to Arbitrary Code Execution. An attacker may be able to validate an invalid instance and access the private member value via ConstraintViolation#getInvalidValue().

## Remediation
There is no fixed version for `rg.hibernate.validator:hibernate-validator`

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7536)
- [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1465573)
