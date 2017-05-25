## Overview
[`tomcat:tomcat-util`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-util%22)
Affected versions of the package are vulnerable to Information Exposure.
It was discovered that when a SecurityManager is configured Tomcat's system property replacement feature for configuration files could be used by a malicious web application to bypass the SecurityManager and read system properties that should not be visible.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/10/27/10)
