## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
Affected versions of the package are vulnerable to Information Exposure. The refactoring of the Connector code for 8.5.x onwards introduced a regression in the error handling of the send file code for the NIO HTTP connector. An error during send file processing resulted in the current Processor object being added to the Processor cache multiple times. This in turn meant that the same Processor could be used for concurrent requests. Sharing a Processor can result in information leakage between requests including, not not limited to, session ID and the response body.

## References
- [Seclist](http://seclists.org/bugtraq/2016/Dec/15)
