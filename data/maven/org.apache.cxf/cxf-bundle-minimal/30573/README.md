## Overview
[`org.apache.cxf:cxf-bundle-jaxrs`](https://http://cxf.apache.org/) is an open source services framework.

The SymmetricBinding in Apache CXF before 2.6.13 and 2.7.x before 2.7.10, when EncryptBeforeSigning is enabled and the UsernameToken policy is set to an EncryptedSupportingToken, transmits the UsernameToken in cleartext, which allows remote attackers to obtain sensitive information by sniffing the network.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0035)