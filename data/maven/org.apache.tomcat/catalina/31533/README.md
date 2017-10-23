## Overview
Affected versions of [`org.apache.tomcat:catalina`](https://tomcat.apache.org) are vulnerable to Directory Traversal.
The HTTP/2 implementation in Apache Tomcat 9.0.0.M1 to 9.0.0.M21 and 8.5.0 to 8.5.15 bypassed a number of security checks that prevented directory traversal attacks. It was therefore possible to bypass security constraints using a specially crafted URL.

## Remediation
Upgrade `org.apache.tomcat:catalina` to version 8.5.16, 9.0.0.M22 or higher.

## References
- [Github PR](https://nvd.nist.gov/vuln/detail/CVE-2017-7675)
- [Github Commit](https://github.com/apache/tomcat/commit/cf181edc9a8c239cde704cffc3c503425bdcae2b)
