## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
The SourceHttpMessageConverter in Spring MVC in Spring Framework before 3.2.5 and 4.0.0.M1 through 4.0.0.RC1 does not disable external entity resolution, which allows remote attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML, aka an XML External Entity (XXE) issue, and a different vulnerability than CVE-2013-4152 and CVE-2013-7315.

## References

- [Pivotal Security](http://www.gopivotal.com/security/cve-2013-6429)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6429)
