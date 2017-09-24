## Overview
[`org.apache.cxf:cxf-bundle`](https://http://cxf.apache.org/) is an open source services framework.
Apache CXF before 2.5.9, 2.6.x before 2.6.6, and 2.7.x before 2.7.3, when the plaintext UsernameToken WS-SecurityPolicy is enabled, allows remote attackers to bypass authentication via a security header of a SOAP request containing a UsernameToken element that lacks a password child element.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0239)