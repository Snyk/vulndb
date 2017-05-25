## Overview
[`com.fasterxml.jackson.dataformat:jackson-dataformat-xml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackson-dataformat-xml%22) is a Data format extension for [Jackson](http://jackson.codehaus.org) to offer alternative support for serializing POJOs as XML and deserializing XML as pojos.
Affected versions of this package are vulnerable to an XML external entity (XXE) vulnerability via the XmlMapper in the Data format extension for Jackson (aka jackson-dataformat-xml).

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3720)
- [Github Issue](https://github.com/FasterXML/jackson-dataformat-xml/issues/190)
- [Github Commit](https://github.com/FasterXML/jackson-dataformat-xml/commit/f0f19a4c924d9db9a1e2830434061c8640092cc0)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1328427)
