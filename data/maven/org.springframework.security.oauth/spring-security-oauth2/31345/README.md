## Overview
[`org.springframework.security.oauth:spring-security-oauth2`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-oauth2%22)
Affected versions of the package are vulnerable to Remote Code Execution. When processing authorization requests using the whitelabel views, the response_type parameter value was executed as Spring SpEL which enabled a malicious user to trigger remote code execution via the crafting of the value for response_type.

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2016-4977)
