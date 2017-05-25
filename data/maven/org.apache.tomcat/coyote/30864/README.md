## Overview
[`org.apache.tomcat:coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22coyote%22)
Apache Tomcat 6.x before 6.0.37 and 7.x before 7.0.30 does not properly handle chunk extensions in chunked transfer coding, which allows remote attackers to cause a denial of service by streaming data.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3544)