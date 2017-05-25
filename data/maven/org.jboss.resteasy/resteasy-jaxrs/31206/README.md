## Overview
[`org.jboss.resteasy:resteasy-jaxrs`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22resteasy-jaxrs%22)
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). It was found that the default exception handler in RESTEasy did not properly validate user input.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1372124)
