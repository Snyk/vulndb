## Overview
[`org.apache.axis2:axis2`](https://axis2.apache.org) is a Web Services / SOAP / WSDL engine, the successor to Apache Axis SOAP stack.

Apache Axis2/Java 1.6.2 and earlier does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5785)
