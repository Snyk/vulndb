## Overview
[`org.apache.cxf:cxf-common-utilities`](https://http://cxf.apache.org/) is an open source services framework.

Apache CXF 2.0.x before 2.0.13, 2.1.x before 2.1.10, and 2.2.x before 2.2.9, as used in Apache ServiceMix, Apache Camel, Apache Chemistry, Apache jUDDI, Apache Geronimo, and other products, does not properly reject DTDs in SOAP messages, which allows remote attackers to read arbitrary files, send HTTP requests to intranet servers, or cause a denial of service (CPU and memory consumption) via a crafted DTD, as demonstrated by an entity declaration in a request to samples/wsdl_first_pure_xml, a similar issue to CVE-2010-1632.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-2076)
