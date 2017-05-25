## Overview
[`org.apache.sling:org.apache.sling.servlets.post`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22org.apache.sling.servlets.post%22)
The deepGetOrCreateNode function in impl/operations/AbstractCreateOperation.java in org.apache.sling.servlets.post.bundle 2.2.0 and 2.3.0 in Apache Sling does not properly handle a NULL value that returned when the session does not have permissions to the root node, which allows remote attackers to cause a denial of service (infinite loop) via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2254)