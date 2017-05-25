## Overview
[`org.keycloak:keycloak-services`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22keycloak-services%22)
Affected versions of the package are vulnerable to Open Redirect.
It was identified that the login redirect implementation provided by JBoss KeyCloak did not validate the redirect URL. This flaw could be used by a remote attacker to conduct phishing attacks by redirecting users to arbitary websites.

## References
- [JBoss Issue](https://issues.jboss.org/browse/KEYCLOAK-700)
