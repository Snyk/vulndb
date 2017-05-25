## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
Apache Tomcat 7.0.12 and 7.0.13 processes the first request to a servlet without following security constraints that have been configured through annotations, which allows remote attackers to bypass intended access restrictions via HTTP requests.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2011-1088, CVE-2011-1183, and CVE-2011-1419.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-1582)