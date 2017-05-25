## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
Affected versions of this package are vulnerable to XML External Entity (XXE) injection attacks due to not disabling entity resolution when using the `JAXB` marshaller. This allows context-dependent attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via an XML external entity declaration in conjunction with an entity reference in a (1) DOMSource, (2) StAXSource, (3) SAXSource, or (4) StreamSource.

**NOTE:** this issue was SPLIT from [CVE-2013-7315](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30162) due to different affected versions.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4152)
- [Pivotal Security](https://pivotal.io/security/cve-2013-4152)
