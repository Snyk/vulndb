## Overview
[`org.apache.jackrabbit:jackrabbit-standalone`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackrabbit-standalone%22)
Apache Commons HttpClient 3.x, as used in Amazon Flexible Payments Service (FPS) merchant Java SDK and other products, does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5783)
