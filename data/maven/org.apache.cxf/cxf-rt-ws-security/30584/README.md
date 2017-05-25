## Overview
[`org.apache.cxf:cxf-rt-ws-security`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-rt-ws-security%22)
Affected versions of the package are vulnerable to Authorization Bypass due to not validating Username Token policies correctly. A malicious client could send a request to the endpoint with no UsernameToken, and the UsernameToken policy requirement would still be marked as valid.

**Note:** This issue was a regression in CXF 2.4.5 and 2.5.1. The vulnerability does not
exist in CXF 2.4.4 and 2.5.0.

## References
- [Apache Security Advisory](http://cxf.apache.org/cve-2012-0803.html)
