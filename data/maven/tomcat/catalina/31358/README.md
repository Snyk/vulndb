## Overview
[`tomcat:catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22catalina%22)
Apache Tomcat 5.5.0 through 5.5.29 and 6.0.0 through 6.0.26 might allow remote attackers to discover the server's hostname or IP address by sending a request for a resource that requires (1) BASIC or (2) DIGEST authentication, and then reading the realm field in the WWW-Authenticate header in the reply.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-1157)