## Overview
[`org.keycloak:keycloak-saml-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22keycloak-saml-core%22)
Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. It mishandles `Logout` requests that contain an `Extension` element, which triggers an infinite loop.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-2646)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/cve-2017-2646)
