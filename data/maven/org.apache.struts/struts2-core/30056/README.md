## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
CookieInterceptor in Apache Struts 2.x before 2.3.16.3, when a wildcard cookiesName value is used, does not properly restrict access to the getClass method, which allows remote attackers to "manipulate" the ClassLoader and modify session state via a crafted request.  NOTE: this vulnerability exists because of an incomplete fix for [CVE-2014-0113](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30055).

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0116)
- [Vulnerability Summary](http://struts.apache.org/docs/s2-022.html)
