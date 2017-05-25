## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
The token check mechanism in Apache Struts 2.0.0 through 2.3.4 does not properly validate the token name configuration parameter, which allows remote attackers to perform cross-site request forgery (CSRF) attacks by setting the token name configuration parameter to a session attribute.

## References

- [Vulnerability Summary](http://struts.apache.org/docs/s2-010.html)
