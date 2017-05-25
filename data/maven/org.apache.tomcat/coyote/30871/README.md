## Overview
[`org.apache.tomcat:coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22coyote%22)
Affected versions of the package are vulnerable to Information Exposure. The code that parsed the HTTP request line permitted invalid characters. This could be exploited, in conjunction with a proxy that also permitted the invalid characters but with a different interpretation, to inject data into the HTTP response. By manipulating the HTTP response the attacker could poison a web-cache, perform an XSS attack and/or obtain sensitive information from requests other then their own.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6816)
- [Apache Security Advisory](https://tomcat.apache.org/security-6.html#Fixed_in_Apache_Tomcat_6.0.48)
