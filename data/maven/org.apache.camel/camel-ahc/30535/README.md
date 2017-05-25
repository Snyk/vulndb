## Overview
[`org.apache.camel:camel-ahc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22camel-ahc%22)
Affected versions of the package are vulnerable to Arbitrary Command Execution.
Apache Camel 2.6.x through 2.14.x, 2.15.x before 2.15.5, and 2.16.x before 2.16.1, when using (1) camel-jetty or (2) camel-servlet as a consumer in Camel routes, allow remote attackers to execute arbitrary commands via a crafted serialized Java object in an HTTP request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5348)
- [Apache Camel Security Advisory](http://camel.apache.org/security-advisories.data/CVE-2015-5348.txt.asc?version=1&modificationDate=1450340845000&api=v2)
- [Jira Issue](https://issues.apache.org/jira/browse/CAMEL-9309)
