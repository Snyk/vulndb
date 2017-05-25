## Overview
[`com.fasterxml.jackson.dataformat:jackson-dataformat-xml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackson-dataformat-xml%22) is a Data format extension for [Jackson](http://jackson.codehaus.org) to offer alternative support for serializing POJOs as XML and deserializing XML as pojos. 
A flaw was found in jackson-dataformat-xml's XmlMapper which allows XXE Out of Band attack. An attacker could use this flaw to launch a SSRF attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7051)
- [GitHub Commit](https://github.com/FasterXML/jackson-dataformat-xml/commit/eeff2c312e9d4caa8c9f27b8f740c7529d00524a)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1378673#c5)
