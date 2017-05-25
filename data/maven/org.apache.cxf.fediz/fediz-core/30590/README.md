## Overview
[`org.apache.cxf.fediz:fediz-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22fediz-core%22)
The application plugins in Apache CXF Fediz 1.2.x before 1.2.3 and 1.3.x before 1.3.1 do not match SAML AudienceRestriction values against configured audience URIs, which might allow remote attackers to have bypass intended restrictions and have unspecified other impact via a crafted SAML token with a trusted signature.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4464)