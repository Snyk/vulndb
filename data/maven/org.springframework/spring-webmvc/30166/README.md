## Overview
[`org.springframework:spring-webmvc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webmvc%22)
The Jaxb2RootElementHttpMessageConverter in Spring MVC in Spring Framework before 3.2.8 and 4.0.0 before 4.0.2 does not disable external entity resolution, which allows remote attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML, aka an XML External Entity (XXE) issue.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2013-4152, CVE-2013-7315, and CVE-2013-6429.

## References

- [Pivotal Security](http://www.pivotal.io/security/cve-2014-0054)
- [Jira Issue](https://jira.spring.io/browse/SPR-11376)
- [NVD](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0054)
