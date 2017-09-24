## Overview
[`org.apache.cxf:cxf-rt-ws-security`](https://http://cxf.apache.org/) is an open source services framework.

Apache CFX 2.5.x before 2.5.10, 2.6.x before CXF 2.6.7, and 2.7.x before CXF 2.7.4 does not verify that a specified cryptographic algorithm is allowed by the WS-SecurityPolicy AlgorithmSuite definition before decrypting, which allows remote attackers to force CXF to use weaker cryptographic algorithms than intended and makes it easier to decrypt communications, aka "XML Encryption backwards compatibility attack."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5575)