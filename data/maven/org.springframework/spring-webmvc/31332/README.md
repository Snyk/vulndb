## Overview
[`org.springframework:spring-webmvc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webmvc%22)
An issue was discovered in Pivotal Spring Framework before 3.2.18, 4.2.x before 4.2.9, and 4.3.x before 4.3.5. Paths provided to the `ResourceServlet` were not properly sanitized and as a result exposed to directory traversal attacks.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9878)
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2016-9878)
