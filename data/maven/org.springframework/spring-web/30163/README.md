## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
Affected versions of this package are vulnerable to XML External Entity (XXE) Injection attacks due to not disabling  the resolution of URI references by default in a DTD declaration. This occurs only when processing user provided XML documents.

## References
- [Pivotal Security](http://www.gopivotal.com/security/cve-2014-0225)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0225)
