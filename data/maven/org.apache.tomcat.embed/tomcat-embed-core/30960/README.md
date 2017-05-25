## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
The HTTP BIO connector in Apache Tomcat 7.0.x before 7.0.12 does not properly handle HTTP pipelining, which allows remote attackers to read responses intended for other clients in opportunistic circumstances by examining the application data in HTTP packets, related to "a mix-up of responses for requests from different users."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-1475)