## Overview
[`org.springframework:spring-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-core%22)
VMware SpringSource Spring Framework before 2.5.6.SEC03, 2.5.7.SR023, and 3.x before 3.0.6, when a container supports Expression Language (EL), evaluates EL expressions in tags twice, which allows remote attackers to obtain sensitive information via a (1) name attribute in a (a) spring:hasBindErrors tag; (2) path attribute in a (b) spring:bind or (c) spring:nestedpath tag; (3) arguments, (4) code, (5) text, (6) var, (7) scope, or (8) message attribute in a (d) spring:message or (e) spring:theme tag; or (9) var, (10) scope, or (11) value attribute in a (f) spring:transform tag, aka "Expression Language Injection."

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-2730)
