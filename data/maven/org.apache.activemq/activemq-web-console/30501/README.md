## Overview
[`org.apache.activemq:activemq-web-console`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq-web-console%22)
The web-based administration console in Apache ActiveMQ 5.x before 5.13.2 does not send an X-Frame-Options HTTP header, which makes it easier for remote attackers to conduct clickjacking attacks via a crafted web page that contains a (1) FRAME or (2) IFRAME element.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-0734)