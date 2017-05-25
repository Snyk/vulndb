## Overview
[`org.codehaus.xfire:xfire-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xfire-core%22)
Codehaus XFire 1.2.6 and earlier, as used in the Amazon EC2 API Tools Java library and other products, does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5817)