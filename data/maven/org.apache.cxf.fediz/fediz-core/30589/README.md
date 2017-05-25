## Overview
[`org.apache.cxf.fediz:fediz-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22fediz-core%22) is a subproject of Apache CXF which implements the WS-Federation Passive Requestor Profile for SSO specification. It provides a number of container based plugins to enable SSO for Relying Party applications. These plugins are potentially vulnerable to DoS attacks due to the fact that support for Document Type Declarations (DTDs) is not disabled when parsing the response from the Identity Provider (IdP).

## References
- [Apache Security Advisory](https://cxf.apache.org/security-advisories.data/CVE-2015-5175.txt.asc?version=1&modificationDate=1440598018000&api=v2)
