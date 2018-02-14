## Overview
[`org.apache.cxf.fediz:fediz-core`](https://cxf.apache.org/) is an open source services framework. It provides a number of container based plugins to enable SSO for Relying Party applications. These plugins are potentially vulnerable to DoS attacks due to the fact that support for Document Type Declarations (DTDs) is not disabled when parsing the response from the Identity Provider (IdP).

## References
- [Apache Security Advisory](https://cxf.apache.org/security-advisories.data/CVE-2015-5175.txt.asc?version=1&modificationDate=1440598018000&api=v2)
