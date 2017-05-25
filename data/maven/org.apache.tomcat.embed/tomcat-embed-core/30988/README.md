## Overview
[`org.apache.tomcat.embed:tomcat-embed-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-embed-core%22)
Affected versions of the package are vulnerable to Timing Attack. The `setGlobalContext` method in `ResourceLinkFactory.java` does not consider whether callers to this method are authorized, which allows remote authenticated users to bypass intended SecurityManager restrictions and read or write to arbitrary application data, or cause a denial of service (application disruption), via a web application that sets a crafted global context.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/10/27/8)
