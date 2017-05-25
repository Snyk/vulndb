## Overview
[`org.apache.nifi:nifi-web-security`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22nifi-web-security%22)
SRC: Apache nifi is vulnerable to unauthorized access via user impersonation attacks. The vulnerability exists due to a possible injection attack in a cluster environment, in the proxy chain's serialization/deserialization. A malicious user can inject `><` in their username to impersonate another user to have unauthorized access on a replicated request to another node.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5636)
- [OSS Security](http://seclists.org/oss-sec/2017/q1/565)
