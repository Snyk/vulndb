## Overview
[`org.jboss.as:jboss-as-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jboss-as-web%22)
The org.apache.catalina.connector.Response.encodeURL method in Red Hat JBoss Web 7.1.x and earlier, when the tracking mode is set to COOKIE, sends the jsessionid in the URL of the first response of a session, which allows remote attackers to obtain the session id (1) via a man-in-the-middle attack or (2) by reading a log.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-4529)