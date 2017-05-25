## Overview
[`org.apache.qpid:proton-project`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22proton-project%22)
Affected versions of the package are vulnerable to Man in the Middle (MitM) Attacks. The Proton C client and C-based client bindings may fail to verify that the server host name matches the domain name in the subject's Common Name (CN) or subjectAltName field in X.509 certificates when running on Windows operating systems.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q3/73)
- [Jira Issue #1](https://issues.apache.org/jira/browse/PROTON-1228)
- [Jira Issue #1](https://issues.apache.org/jira/browse/PROTON-1233)
