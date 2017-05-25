## Overview
[`org.apache.cxf:cxf-bundle-minimal`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-bundle-minimal%22)
The URIMappingInterceptor in Apache CXF before 2.5.8, 2.6.x before 2.6.5, and 2.7.x before 2.7.2, when using the WSS4JInInterceptor, bypasses WS-Security processing, which allows remote attackers to obtain access to SOAP services via an HTTP GET request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5633)