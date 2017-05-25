## Overview
[`org.apache.logging.log4j:log4j-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22log4j-core%22)
In Apache Log4j 2.x before 2.8.2, when using the TCP socket server or UDP socket server to receive serialized log events from another application, a specially crafted binary payload can be sent that, when deserialized, can execute arbitrary code.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5645)
- [Jira Issue](https://issues.apache.org/jira/browse/LOG4J2-1863)
