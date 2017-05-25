## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
Affected versions of the package are vulnerable to Denial of Service (DoS). The HTTP/2 header parser entered an infinite loop if a header was
received that was larger than the available buffer.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q4/501)
