## Overview
[`org.apache.tomcat:tomcat-util`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-util%22)
Integer overflow in java/org/apache/tomcat/util/buf/Ascii.java in Apache Tomcat before 6.0.40, 7.x before 7.0.53, and 8.x before 8.0.4, when operated behind a reverse proxy, allows remote attackers to conduct HTTP request smuggling attacks via a crafted Content-Length HTTP header.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0099)