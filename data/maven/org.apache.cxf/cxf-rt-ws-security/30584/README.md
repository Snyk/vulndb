## Overview
[`org.apache.cxf:cxf-rt-ws-security`](https://http://cxf.apache.org/) is an open source services framework.

Affected versions of the package are vulnerable to Authorization Bypass due to not validating Username Token policies correctly. A malicious client could send a request to the endpoint with no UsernameToken, and the UsernameToken policy requirement would still be marked as valid.

**Note:** This issue was a regression in CXF 2.4.5 and 2.5.1. The vulnerability does not
exist in CXF 2.4.4 and 2.5.0.

## References
- [Apache Security Advisory](http://cxf.apache.org/cve-2012-0803.html)
