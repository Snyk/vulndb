## Overview
[`org.apache.sling:org.apache.sling.servlets.post`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22org.apache.sling.servlets.post%22)
The @CopyFrom operation in the POST servlet in the org.apache.sling.servlets.post bundle before 2.1.2 in Apache Sling does not prevent attempts to copy an ancestor node to a descendant node, which allows remote attackers to cause a denial of service (infinite loop) via a crafted HTTP request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-2138)