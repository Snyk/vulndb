## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
Session fixation vulnerability in Apache Tomcat 7.x before 7.0.66, 8.x before 8.0.30, and 9.x before 9.0.0.M2, when different session settings are used for deployments of multiple versions of the same web application, might allow remote attackers to hijack web sessions by leveraging use of a requestedSessionSSL field for an unintended request, related to CoyoteAdapter.java and Request.java.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5346)