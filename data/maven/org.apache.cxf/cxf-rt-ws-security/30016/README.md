## Overview
[`org.apache.cxf:cxf-rt-ws-security`](https://http://cxf.apache.org/) is an open source services framework.

The URIMappingInterceptor in Apache CXF before 2.5.8, 2.6.x before 2.6.5, and 2.7.x before 2.7.2, when using the WSS4JInInterceptor, bypasses WS-Security processing, which allows remote attackers to obtain access to SOAP services via an HTTP GET request.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2012-5633)
