## Overview
[`org.apache.cxf:cxf-rt-frontend-jaxrs`](https://http://cxf.apache.org/) is an open source services framework.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.
Apache CXF supports sending and receiving attachments via either the JAX-WS or JAX-RS specifications. It is possible to craft a message attachment header that could lead to a Denial of Service (DoS) attack on a CXF web service provider. Both JAX-WS and JAX-RS services are vulnerable to this attack. From Apache CXF 3.2.1 and 3.1.14, message attachment headers that are greater than 300 characters will be rejected by default. This value is configurable via the property attachment-max-header-size.

## References
- [Apache CXF Security Announcment](http://cxf.apache.org/security-advisories.data/CVE-2017-12624.txt.asc)
- [GitHub Commit](https://github.com/apache/cxf/commit/8bd915bfd7735c248ad660059c6b6ad26cdbcdf6)
