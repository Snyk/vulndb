## Overview
[`org.springframework:spring-webmvc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webmvc%22)
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The  `web/servlet/tags/form/FormTag.java` method allows remote attackers to inject arbitrary web script or HTML via the requested URI in a default action.

## References
- [Pivotal Security](http://www.gopivotal.com/security/cve-2014-1904)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-1904)
