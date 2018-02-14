## Overview
[keycloak-auth-utils](https://www.npmjs.com/package/keycloak-auth-utils) provides grant-management utilities for keycloak.

Affected versioms of this package are vulnerable to Authentication Bypass. An attacker could use this flaw to bypass authentication and gain access to restricted information, or to possibly conduct further attacks.

## Remediation
Upgrade keycloak-auth-utils to version 3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7474)
- [Red Hat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1445271)
- [GitHub PR](https://github.com/keycloak/keycloak-nodejs-auth-utils/pull/49)