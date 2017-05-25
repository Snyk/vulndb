## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
It was discovered that a programming error in the processing of HTTPS requests in the Apache Tomcat servlet and JSP engine may result in denial of service via an infinite loop. The denial of service is easily achievable as a consequence of backporting a CVE-2016-6816 fix but not backporting the fix for Tomcat bug 57544. Distributions affected by this backporting issue include Debian (before 7.0.56-3+deb8u8 and 8.0.14-1+deb8u7 in jessie) and Ubuntu.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-6056)
- [Debian Security Announcment 7.x](https://lists.debian.org/debian-security-announce/2017/msg00038.html)
- [Debian Security Announcment 8.x](https://lists.debian.org/debian-security-announce/2017/msg00039.html)
