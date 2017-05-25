## Overview
[`org.jboss.resteasy:resteasy-jaxrs`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22resteasy-jaxrs%22)
The readFrom function in providers.jaxb.JAXBXmlTypeProvider in RESTEasy before 2.3.2 allows remote attackers to read arbitrary files via an external entity reference in a Java Architecture for XML Binding (JAXB) input, aka an XML external entity (XXE) injection attack, a similar vulnerability to CVE-2012-0818.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-5245)