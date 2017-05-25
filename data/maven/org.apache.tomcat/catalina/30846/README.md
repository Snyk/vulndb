## Overview
[`org.apache.tomcat:catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22catalina%22)
org/apache/catalina/connector/CoyoteAdapter.java in Apache Tomcat 6.0.33 through 6.0.37 does not consider the disableURLRewriting setting when handling a session ID in a URL, which allows remote attackers to conduct session fixation attacks via a crafted URL.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0033)