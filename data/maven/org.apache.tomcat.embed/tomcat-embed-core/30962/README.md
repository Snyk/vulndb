## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
Apache Tomcat 5.5.x before 5.5.34, 6.x before 6.0.33, and 7.x before 7.0.17, when the MemoryUserDatabase is used, creates log entries containing passwords upon encountering errors in JMX user creation, which allows local users to obtain sensitive information by reading a log file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-2204)