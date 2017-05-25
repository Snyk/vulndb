## Overview
[`org.springframework:spring-webmvc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webmvc%22)
Affected versions of this package do not disable external entity resolution, which allows remote attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML, aka an XML External Entity (XXE) issue.  

**NOTE:** this vulnerability exists because of an incomplete fix for [CVE-2013-4152](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31330), [CVE-2013-7315](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30162), and [CVE-2013-6429](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30160).

## References
- [Pivotal Security](http://www.pivotal.io/security/cve-2014-0054)
- [Jira Issue](https://jira.spring.io/browse/SPR-11376)
- [NVD](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0054)
