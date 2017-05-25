## Overview
[`org.apache.nifi:nifi-web-security`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22nifi-web-security%22)

Affected versions of this package are vulnerable to User Impersonation.
An attacker could carefully craft a username to impersonate another user and gain their permissions on a replicated request to another node, via the the proxy chain serialization/deserialization functions as they are vulnerable to an injection attack. This only occurs in a cluster environment.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5636)
- [OSS Security](http://seclists.org/oss-sec/2017/q1/565)
