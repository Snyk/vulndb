## Overview
[`org.apache.cxf:cxf-bundle`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cxf-bundle%22)
Affected versions of the package are vulnerable to Authorization Bypass.
CXF does not validate a WS-Security UsernameToken received as part of the security header of a SOAP request against a WS-SP UsernameToken policy.
A malicious client could send a request to the endpoint with no UsernameToken, and the UsernameToken policy requirement would still be marked as valid.

## References
- [Apache Security Advisory](http://cxf.apache.org/cve-2012-0803.html)
