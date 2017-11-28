## Overview
[`org.keycloak:keycloak-services`](https://keycloak.org) is an open Source Identity and Access Management for modern Applications and Services.

Affected versions of the package are vulnerable to Privilege Escalation.
It was found that Keycloak oauth would permit an authenticated resource to obtain an access/refresh token pair from the authentication server, permitting indefinite usage in the case of permission revocation. An attacker on an already compromised resource could use this flaw to grant himself continued permissions and possibly conduct further attacks

## Remediation
Upgrade `org.keycloak:keycloak-services` to version 3.3.0.Final or higher.

## References
- [nvd](https://nvd.nist.gov/vuln/detail/CVE-2017-12160)
- [Github PR](https://github.com/keycloak/keycloak/pull/4576)
- [Github Commit](https://github.com/keycloak/keycloak/commit/fea4c54adc6a1fdafb725b89874c389d54b6d04a)
