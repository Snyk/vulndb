## Overview
[`org.apache.cxf:cxf-bundle-minimal`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-bundle-minimal%22)
Apache CXF before 2.5.9, 2.6.x before 2.6.6, and 2.7.x before 2.7.3, when the plaintext UsernameToken WS-SecurityPolicy is enabled, allows remote attackers to bypass authentication via a security header of a SOAP request containing a UsernameToken element that lacks a password child element.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0239)