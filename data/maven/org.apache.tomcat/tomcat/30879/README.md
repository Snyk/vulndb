## Overview
[`org.apache.tomcat:tomcat`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat%22)
The default configuration of Apache Tomcat 6.x does not include the HTTPOnly flag in a Set-Cookie header, which makes it easier for remote attackers to hijack a session via script access to a cookie.

For more information on Insecure Defaults, see our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/)

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-4312)
