## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
The CookieInterceptor component in Apache Struts before 2.3.1.1 does not use the parameter-name whitelist, which allows remote attackers to execute arbitrary commands via a crafted HTTP Cookie header that triggers Java code execution through a static method.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-0392)