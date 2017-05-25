## Overview
[`org.apache.tomcat:tomcat-catalina-jmx-remote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina-jmx-remote%22)
Affected versions of the package are vulnerable to Remote Code Execution. The `JmxRemoteLifecycleListener` was not updated to take account of Oracle's fix for CVE-2016-3427. Therefore, Tomcat installations using this listener remained vulnerable to a similar remote code execution vulnerability. This issue has been rated as important rather than critical due to the small number of installations using this listener and that it would be highly unusual for the JMX ports to be accessible to an attacker even when the listener is used.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/11/22/16)
