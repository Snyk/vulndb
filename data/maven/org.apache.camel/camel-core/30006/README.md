## Overview
[`org.apache.camel:camel-core`](https://camel.apache.org/) is a versatile open-source integration framework based on known Enterprise Integration Patterns.

Multiple XML external entity (XXE) vulnerabilities in builder/xml/XPathBuilder.java in Apache Camel before 2.13.4 and 2.14.x before 2.14.2 allow remote attackers to read arbitrary files via an external entity in an invalid XML (1) String or (2) GenericFile object in an XPath query.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0264)
- [Apache Security Advisory](https://camel.apache.org/security-advisories.data/CVE-2015-0264.txt.asc?version=1&modificationDate=1426539191000&api=v2)
