## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
Apache Tomcat 6.0.30 through 6.0.33 and 7.x before 7.0.22 does not properly perform certain caching and recycling operations involving request objects, which allows remote attackers to obtain unintended read access to IP address and HTTP header information in opportunistic circumstances by reading TCP data.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-3375)