## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
The ParameterInterceptor component in Apache Struts before 2.3.1.1 does not prevent access to public constructors, which allows remote attackers to create or overwrite arbitrary files via a crafted parameter that triggers the creation of a Java object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-0393)