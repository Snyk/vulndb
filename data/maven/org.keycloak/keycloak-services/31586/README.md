## Overview
[`org.keycloak:keycloak-services`](https://keycloak.org) is an Open Source Identity and Access Management for modern Applications and Services.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
The org.keycloak.services.resources.SocialResource.callback method in JBoss KeyCloak before 1.0.3.Final allows remote attackers to conduct cross-site request forgery (CSRF) attacks by leveraging lack of CSRF protection.

## Remediation
Upgrade `org.keycloak:keycloak-services` to version 1.0.3.Final or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-3709)
- [JBoss Issue](https://issues.jboss.org/browse/KEYCLOAK-765?_sscc&#x3D;t)
- [Github Commit](https://github.com/keycloak/keycloak/commit/bb132e1aa0b3b3a123883d0b8d0b788337df956d)
