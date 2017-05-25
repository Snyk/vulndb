## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
org/apache/catalina/realm/RealmBase.java in Apache Tomcat 6.x before 6.0.36 and 7.x before 7.0.30, when FORM authentication is used, allows remote attackers to bypass security-constraint checks by leveraging a previous setUserPrincipal call and then placing /j_security_check at the end of a URI.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3546)