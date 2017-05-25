## Overview
[`org.apache.jackrabbit:jackrabbit-standalone`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackrabbit-standalone%22)
MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.
Affected versions of the package are vulnerable to Denial Of Service (DoS).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0050)
