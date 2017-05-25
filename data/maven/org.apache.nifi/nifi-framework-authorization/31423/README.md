## Overview
[`org.apache.nifi:nifi-framework-authorization`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22nifi-framework-authorization%22)
Affected versions of this package ate vulnerable to Unauthorized Data Access in a cluster environment. An anonymous user request can be replicated to another node. This node will contain the identity of the originating node rather than the anonymous user's identity.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5635)
- [OSS Security](http://seclists.org/oss-sec/2017/q1/565)
