## Overview
[`org.springframework:spring-oxm`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-oxm%22)
Pivotal Spring Framework before 3.2.14 and 4.x before 4.1.7 do not properly process inline DTD declarations when DTD is not entirely disabled, which allows remote attackers to cause a denial of service (memory consumption and out-of-memory errors) via a crafted XML file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3192)