## Overview
[`org.apache.tomcat:coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22coyote%22)
Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4322)