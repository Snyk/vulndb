## Overview
[`org.jboss.resteasy:resteasy-jaxb-provider`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22resteasy-jaxb-provider%22)
RESTEasy 2.3.1 before 2.3.8.SP2 and 3.x before 3.0.9, as used in Red Hat JBoss Enterprise Application Platform (EAP) 6.3.0, does not disable external entities when the resteasy.document.expand.entity.references parameter is set to false, which allows remote attackers to read arbitrary files and have other unspecified impact via unspecified vectors, related to an XML External Entity (XXE) issue.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-0818.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3490)