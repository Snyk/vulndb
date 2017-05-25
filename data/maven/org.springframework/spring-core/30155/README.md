## Overview
[`org.springframework:spring-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-core%22)
Algorithmic complexity vulnerability in the java.util.regex.Pattern.compile method in Sun Java Development Kit (JDK) before 1.6, when used with spring.jar in SpringSource Spring Framework 1.1.0 through 2.5.6 and 3.0.0.M1 through 3.0.0.M2 and dm Server 1.0.0 through 1.0.2, allows remote attackers to cause a denial of service (CPU consumption) via serializable data with a long regex string containing multiple optional groups, a related issue to CVE-2004-2540.

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-1190)
