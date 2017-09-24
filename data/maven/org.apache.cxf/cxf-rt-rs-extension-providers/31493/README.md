## Overview
[`org.apache.cxf:cxf-rt-rs-extension-providers`](https://http://cxf.apache.org/) is an open source services framework.

Affected versions of the package are vulnerable to XML External Entity (XXE) attacks.
The JAX-RS module in Apache CXF prior to 3.0.12 and 3.1.x prior to 3.1.9 provides a number of Atom JAX-RS MessageBodyReaders. These readers use Apache Abdera Parser which expands XML entities by default which represents a major XXE risk.


## References
- [Jira Issue](https://issues.apache.org/jira/browse/CXF-6217)
