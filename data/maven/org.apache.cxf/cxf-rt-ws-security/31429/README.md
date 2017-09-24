## Overview
[`org.apache.cxf:cxf-rt-ws-security`](https://http://cxf.apache.org/) is an open source services framework.

Apache CXF's STSClient before 3.1.11 and 3.0.13 uses a flawed way of caching tokens that are associated with delegation tokens, which means that an attacker could craft a token which would return an identifer corresponding to a cached token for another user.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5656)
- [CXF Security Advisory](http://cxf.apache.org/security-advisories.data/CVE-2017-5656.txt.asc?version=1&amp;modificationDate=1492515113282&amp;api=v2)
