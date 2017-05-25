## Overview
[`org.apache.tomcat:coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22coyote%22)
Affected versions of the package are vulnerable to Arbitrary Code Execution. The JmxRemoteLifecycleListener was not updated to take account of Oracle's fix for CVE-2016-3427. Therefore, Tomcat installations using this listener remained vulnerable to a similar remote code execution vulnerability. This issue has been rated as important rather than critical due to the small number of installations using this listener and that it would be highly unusual for the JMX ports to be accessible to an attacker even when the listener is used.

## References
- [Apache Security Advisory](http://tomcat.apache.org/security-8.html#Fixed_in_Apache_Tomcat_8.5.9)
- [Seclist](http://seclists.org/bugtraq/2016/Dec/15)
