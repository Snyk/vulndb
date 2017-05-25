## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
org/apache/catalina/core/DefaultInstanceManager.java in Apache Tomcat 7.x before 7.0.22 does not properly restrict ContainerServlets in the Manager application, which allows local users to gain privileges by using an untrusted web application to access the Manager application's functionality.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-3376)