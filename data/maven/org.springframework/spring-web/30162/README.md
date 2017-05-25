## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
Affected versions of this package are vulnerable to XML External Entity (XXE) injection attacks due to not disabling external entity resolution for the `StAX` `XMLInputFactory`. This allows context-dependent attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML with JAXB.

**NOTE:** this issue was SPLIT from [CVE-2013-4152](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31330) due to different affected versions.

## References
- [Pivotal Security](https://pivotal.io/security/cve-2013-7315)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-7315)
