## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
Apache Tomcat 5.5.0 through 5.5.29, 6.0.0 through 6.0.27, and 7.0.0 beta does not properly handle an invalid Transfer-Encoding header, which allows remote attackers to cause a denial of service (application outage) or obtain sensitive information via a crafted header that interferes with "recycling of a buffer."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-2227)