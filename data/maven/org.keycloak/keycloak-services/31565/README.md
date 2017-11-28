## Overview
[`org.keycloak:keycloak-services`](https://keycloak.org) is an open Source Identity and Access Management for modern Applications and Services.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
It was found that the cookie used for CSRF prevention in Keycloak was not unique to each session. An attacker could use this flaw to gain access to an authenticated user session, leading to possible information disclosure or further attacks.

## Remediation
Upgrade `org.keycloak:keycloak-services` to version 3.3.0.Final or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12159)
- [Github PR](https://github.com/keycloak/keycloak/pull/4585)
- [Github Commit](https://github.com/keycloak/keycloak/commit/9b75b603e3a5f5ba6deff13cbb45b070bf2d2239)
