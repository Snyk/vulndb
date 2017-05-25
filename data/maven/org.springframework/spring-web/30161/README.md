## Overview
[`org.springframework:spring-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-web%22)
The `JavaScriptUtils.javaScriptEscape()` method did not escape all characters that are sensitive within either a JS single quoted string, JS double quoted string, or HTML script data context. In most cases this will result in an unexploitable parse error but in some cases it could result in an XSS vulnerability.

## References
- [Pivotal Security](http://www.gopivotal.com/security/cve-2013-6430)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6430)
- [GitHub Commit](https://github.com/spring-projects/spring-framework/commit/7a7df6637478607bef0277bf52a4e0a03e20a248)
- [Jira Issue](https://jira.spring.io/browse/SPR-9983)
