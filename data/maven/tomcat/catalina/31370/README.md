## Overview
[`tomcat:catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22catalina%22)
The HTTP Digest Access Authentication implementation in Apache Tomcat 5.5.x before 5.5.36, 6.x before 6.0.36, and 7.x before 7.0.30 caches information about the authenticated user within the session state, which makes it easier for remote attackers to bypass authentication via vectors related to the session ID.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5886)