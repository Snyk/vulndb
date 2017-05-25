## Overview
[`org.springframework.security:spring-security-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-web%22)
It was found that Spring Security does not consider URL path parameters when processing security constraints. By adding a URL path parameter with an encoded / to a request an attacker may be able to bypass a security constraint.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9879)
