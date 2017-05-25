## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
java/org/apache/coyote/http11/InternalNioInputBuffer.java in the HTTP NIO connector in Apache Tomcat 6.x before 6.0.36 and 7.x before 7.0.28 does not properly restrict the request-header size, which allows remote attackers to cause a denial of service (memory consumption) via a large amount of header data.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-2733)