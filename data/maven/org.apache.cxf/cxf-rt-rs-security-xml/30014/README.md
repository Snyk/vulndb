## Overview
[`org.apache.cxf:cxf-rt-rs-security-xml`](https://http://cxf.apache.org/) is an open source services framework.

The SamlHeaderInHandler in Apache CXF before 2.6.11, 2.7.x before 2.7.8, and 3.0.x before 3.0.1 allows remote attackers to cause a denial of service (infinite loop) via a crafted SAML token in the authorization header of a request to a JAX-RS service.

## References
- [Apache Mailing List Archives](http://cxf.apache.org/security-advisories.data/CVE-2014-3584.txt.asc)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3584)
- [Jira Issue](https://issues.apache.org/jira/browse/CXF-5390)
