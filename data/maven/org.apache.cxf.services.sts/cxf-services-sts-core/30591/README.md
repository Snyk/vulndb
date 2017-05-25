## Overview
[`org.apache.cxf.services.sts:cxf-services-sts-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-services-sts-core%22)
The SecurityTokenService (STS) in Apache CXF before 2.6.12 and 2.7.x before 2.7.9 does not properly validate SAML tokens when caching is enabled, which allows remote attackers to gain access via an invalid SAML token.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0034)