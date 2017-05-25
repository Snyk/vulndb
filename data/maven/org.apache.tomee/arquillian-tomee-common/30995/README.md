## Overview
[`org.apache.tomee:arquillian-tomee-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22arquillian-tomee-common%22)
Affected versions of the package are vulnerable to Untrusted Object Deserialization. The EjbObjectInputStream class in Apache TomEE before 1.7.4 and 7.x before 7.0.0-M3 allows remote attackers to execute arbitrary code via a crafted serialized object.

## References
- [Apache Security Advisory](http://tomee.apache.org/security/tomee.html)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-0779)
- [SecurityFocus](http://www.securityfocus.com/bid/84422)
