## Overview
[`org.apache.sling:org.apache.sling.api`](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

Multiple cross-site scripting (XSS) vulnerabilities in Apache Sling API before 2.2.2 and Apache Sling Servlets Post before 2.1.2 allow remote attackers to inject arbitrary web script or HTML via the URI, related to (1) org/apache/sling/api/servlets/HtmlResponse and (2) org/apache/sling/servlets/post/HtmlResponse.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2944)
