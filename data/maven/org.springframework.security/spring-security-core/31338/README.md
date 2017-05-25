## Overview
[`org.springframework.security:spring-security-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-core%22)
Race condition in the RunAsManager mechanism in VMware SpringSource Spring Security before 2.0.7 and 3.0.x before 3.0.6 stores the Authentication object in the shared security context, which allows attackers to gain privileges via a crafted thread.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-2731)