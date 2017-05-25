## Overview
[`org.apache.tomcat:tomcat-catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-catalina%22)
Affected versions of the package are vulnerable to Timing Attacks determining valid user names. The Realm implementations did not process the supplied password if the supplied user name did not exist.

**Note:** The default configuration includes the `LockOutRealm` which makes exploitation of this vulnerability harder.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/10/27/8)
