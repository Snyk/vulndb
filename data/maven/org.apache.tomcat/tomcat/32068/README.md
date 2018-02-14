## Overview
[org.apache.tomcat:tomcat](http://tomcat.apache.org/) is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies.

Affected versions of this package are vulnerable to Incorrectly Documented search algorithm. The documentation included an updated description of the search algorithm used by the CGI Servlet to identify which script to execute.

## Remediation
Upgrade `org.apache.tomcat:tomcat` to versions 9.0.2, 8.5.24, 8.0.48,  7.0.84 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15706)
- [Apache Mail Archives](https://lists.apache.org/thread.html/e1ef853fc0079cdb55befbd2dac042934e49288b476d5f6a649e5da2@%3Cannounce.tomcat.apache.org%3E)
