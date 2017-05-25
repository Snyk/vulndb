## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
Affected versions of the package are vulnerable to Denial Of Service (DoS). If an application allows enter an URL in a form field and built-in URLValidator is used, it is possible to prepare a special URL which will be used to overload server process when performing validation of the URL.

## References
- [Apache Security Advisory](http://struts.apache.org/docs/s2-044.html)
