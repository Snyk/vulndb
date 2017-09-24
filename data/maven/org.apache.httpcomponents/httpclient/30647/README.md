## Overview
[`org.apache.httpcomponents:httpclient`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22httpclient%22)
http/conn/ssl/SSLConnectionSocketFactory.java in Apache HttpComponents HttpClient before 4.3.6 ignores the http.socket.timeout configuration setting during an SSL handshake, which allows remote attackers to cause a denial of service (HTTPS call hang) via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5262)
- [Jira Issue](https://issues.apache.org/jira/browse/HTTPCLIENT-1478)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1261538)
