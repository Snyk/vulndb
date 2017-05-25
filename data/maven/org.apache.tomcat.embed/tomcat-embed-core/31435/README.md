## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
In Apache Tomcat 9.0.0.M1 to 9.0.0.M18 and 8.5.0 to 8.5.12, the handling of an HTTP/2 GOAWAY frame for a connection did not close streams associated with that connection that were currently waiting for a `WINDOW_UPDATE` before allowing the application to write more data. These waiting streams each consumed a thread. A malicious client could therefore construct a series of HTTP/2 requests that would consume all available processing threads.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5650)
- [Apache Mailing List](https://lists.apache.org/thread.html/d24303fb095db072740d8154b0f0db3f2b8f67bc91a0562dbe89c738@%3Cannounce.tomcat.apache.org%3E)
