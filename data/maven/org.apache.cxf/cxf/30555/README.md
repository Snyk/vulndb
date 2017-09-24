## Overview
[`org.apache.cxf:cxf`](https://http://cxf.apache.org/) is an open source services framework.
Apache WSS4J before 1.6.17 and 2.x before 2.0.2, as used in Apache CXF 2.7.x before 2.7.13 and 3.0.x before 3.0.2, when using TransportBinding, does not properly enforce the SAML SubjectConfirmation method security semantics, which allows remote attackers to conduct spoofing attacks via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3623)