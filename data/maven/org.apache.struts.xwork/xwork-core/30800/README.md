## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
Apache Struts 2.x before 2.3.25 does not sanitize text in the Locale object constructed by I18NInterceptor, which might allow remote attackers to conduct cross-site scripting (XSS) attacks via unspecified vectors involving language display.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2162)