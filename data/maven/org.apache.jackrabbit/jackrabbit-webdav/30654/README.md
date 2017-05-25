## Overview
[`org.apache.jackrabbit:jackrabbit-webdav`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackrabbit-webdav%22)
Cross-site request forgery (CSRF) vulnerability in the CSRF content-type check in Jackrabbit-Webdav in Apache Jackrabbit 2.4.x before 2.4.6, 2.6.x before 2.6.6, 2.8.x before 2.8.3, 2.10.x before 2.10.4, 2.12.x before 2.12.4, and 2.13.x before 2.13.3 allows remote attackers to hijack the authentication of unspecified victims for requests that create a resource via an HTTP POST request with a (1) missing or (2) crafted Content-Type header.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6801)