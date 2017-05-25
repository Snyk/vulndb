## Overview
[`org.apache.qpid:qpid-broker-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22qpid-broker-core%22)
PlainSaslServer.java in Apache Qpid Java before 6.0.3, when the broker is configured to allow plaintext passwords, allows remote attackers to cause a denial of service (broker termination) via a crafted authentication attempt, which triggers an uncaught exception.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3094)