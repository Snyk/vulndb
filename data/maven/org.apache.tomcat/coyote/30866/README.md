## Overview
[`org.apache.tomcat:coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22coyote%22)
Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a "Transfer-Encoding: chunked" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4286)