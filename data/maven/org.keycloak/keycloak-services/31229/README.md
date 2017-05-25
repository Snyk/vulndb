## Overview
[`org.keycloak:keycloak-services`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22keycloak-services%22)
Affected versions of the package are vulnerable to Denial of Service (DoS).
It was discovered that by requesting a large enough image size for a generated QR code in JBoss KeyCloak, a remote attacker could cause uncontrolled resource consumption leading to denial of service for legitimate users.

## References
- [JBoss Issue](https://issues.jboss.org/browse/KEYCLOAK-699)
