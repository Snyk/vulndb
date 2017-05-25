## Overview
[`org.opensaml:opensaml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22opensaml%22)
The PKIX trust engines in Shibboleth Identity Provider before 2.4.4 and OpenSAML Java (OpenSAML-J) before 2.6.5 trust candidate X.509 credentials when no trusted names are available for the entityID, which allows remote attackers to impersonate an entity via a certificate issued by a shibmd:KeyAuthority trust anchor.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-1796)