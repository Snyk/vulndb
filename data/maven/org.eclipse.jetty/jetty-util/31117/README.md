## Overview
[`org.eclipse.jetty:jetty-util`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jetty-util%22)
Affected versions of the package are vulnerable to Information Exposure. The path normalization mechanism in PathResource class in Eclipse Jetty 9.3.x before 9.3.9 on Windows allows remote attackers to bypass protected resource restrictions and other security constraints via a URL with certain escaped characters, related to backslashes.


## References
- [ocert](http://www.ocert.org/advisories/ocert-2016-001.html)
