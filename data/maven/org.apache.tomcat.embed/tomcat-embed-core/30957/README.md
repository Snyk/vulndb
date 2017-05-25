## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
Apache Tomcat 7.0.11, when web.xml has no login configuration, does not follow security constraints, which allows remote attackers to bypass intended access restrictions via HTTP requests to a meta-data complete web application.  NOTE: this vulnerability exists because of an incorrect fix for CVE-2011-1088 and CVE-2011-1419.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-1183)