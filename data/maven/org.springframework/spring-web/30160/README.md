## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
The `SourceHttpMessageConverter` processor does not disable external entity resolution, which allows remote attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML, aka an XML External Entity (XXE) issue, and a different vulnerability than [CVE-2013-4152](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31330) and [CVE-2013-7315](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30162).

## References
- [Pivotal Security](http://www.gopivotal.com/security/cve-2013-6429)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6429)
