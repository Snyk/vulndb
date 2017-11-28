## Overview
[`org.keycloak:keycloak-saml-core`](https://keycloak.org) is an open Source Identity and Access Management for modern Applications and Services.

Affected versions of the package are vulnerable to Information Exposure. In certian cases, the SAML request parser replaces special strings with system properties.

## Remediation
Upgrade `org.keycloak:keycloak-saml-core` to version 2.5.1.Final or higher.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id&#x3D;1410481)
- [Github PR](https://github.com/keycloak/keycloak/pull/3715)
- [Github Commit](https://github.com/keycloak/keycloak/pull/3715/commits/0cb5ba0f6e83162d221681f47b470c3042eef237)
