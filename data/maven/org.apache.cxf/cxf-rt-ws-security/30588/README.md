## Overview
[`org.apache.cxf:cxf-rt-ws-security`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-rt-ws-security%22)
The SymmetricBinding in Apache CXF before 2.6.13 and 2.7.x before 2.7.10, when EncryptBeforeSigning is enabled and the UsernameToken policy is set to an EncryptedSupportingToken, transmits the UsernameToken in cleartext, which allows remote attackers to obtain sensitive information by sniffing the network.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0035)