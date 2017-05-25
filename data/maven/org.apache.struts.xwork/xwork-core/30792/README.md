## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
Apache Struts 2 before 2.2.3.1 evaluates a string as an OGNL expression during the handling of a conversion error, which allows remote attackers to modify run-time data values, and consequently execute arbitrary code, via invalid input to a field.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-0838)