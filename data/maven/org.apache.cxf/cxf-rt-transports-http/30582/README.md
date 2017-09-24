## Overview
[`org.apache.cxf:cxf-rt-transports-http`](https://http://cxf.apache.org/) is an open source services framework.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) Attacks.

## Details
Apache CXF HTTP transport module uses FormattedServiceListWriter to provide an HTML page which lists the names and the absolute URL addresses of the available service endpoints.
The module calculates the base URL using the current HttpServletRequest. The calculated base URL is used by FormattedServiceListWriter to build the service endpoint absolute URLs. If the unexpected matrix parameters have been injected into the request URL then these matrix parameters will find their way back to the client in the services list page which represents an XSS risk to the client.

## References
- [Apache Security Advisory](http://cxf.apache.org/security-advisories.data/CVE-2016-6812.txt.asc?version=1&modificationDate=1482164360602&api=v2)
