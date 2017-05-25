## Overview
[`org.apache.cxf:cxf-rt-ws-security`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-rt-ws-security%22)
Apache CXF 2.4.x before 2.4.8, 2.5.x before 2.5.4, and 2.6.x before 2.6.1, when a Supporting Token specifies a child WS-SecurityPolicy 1.1 or 1.2 policy, does not properly ensure that an XML element is signed or encrypted, which has unspecified impact and attack vectors.
Affected versions of the package are vulnerable to Authentication Bypass.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-2379)
