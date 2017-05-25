## Overview
[`org.apache.wss4j:wss4j`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wss4j%22)
Apache WSS4J before 1.6.17 and 2.x before 2.0.2, as used in Apache CXF 2.7.x before 2.7.13 and 3.0.x before 3.0.2, when using TransportBinding, does not properly enforce the SAML SubjectConfirmation method security semantics, which allows remote attackers to conduct spoofing attacks via unspecified vectors.

## References

- [Apache Mailing List Archive](http://cxf.apache.org/security-advisories.data/CVE-2014-3623.txt.asc)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3623)
