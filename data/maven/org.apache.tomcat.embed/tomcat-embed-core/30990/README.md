## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
Affected versions of the package are vulnerable to Access Restriction Bypass. The Realm implementations did not process the supplied password if the supplied user name did not exist. This made a timing attack possible to determine valid user names. Note that the default configuration includes the LockOutRealm which makes exploitation of this vulnerability harder.

## References
- [securityfocus](http://www.securityfocus.com/archive/1/537581/30/0/threaded)
