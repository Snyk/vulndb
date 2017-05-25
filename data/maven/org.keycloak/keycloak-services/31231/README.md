## Overview
[`org.keycloak:keycloak-services`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22keycloak-services%22)
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
If a JBoss Keycloak application was configured to use `*` as a permitted web origin in the Keycloak administrative console, crafted requests to the login-status-iframe.html endpoint could inject arbitrary Javascript into the generated HTML code via the "origin" query parameter, leading to a cross-site scripting (XSS) vulnerability.

## References
- [JBoss Issue](https://issues.jboss.org/browse/KEYCLOAK-703)
