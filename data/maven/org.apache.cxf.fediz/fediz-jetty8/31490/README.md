## Overview
[`org.apache.cxf.fediz:fediz-jetty8`](https://fediz.cxf.apache.org) is a subproject of Apache CXF.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).

Apache CXF Fediz ships with a number of container-specific plugins to enable WS-Federation for applications. A CSRF (Cross Style Request Forgery) style vulnerability has been found in the Spring 2, Spring 3, Jetty 8 and Jetty 9 plugins in Apache CXF Fediz prior to 1.4.0, 1.3.2 and 1.2.4.
The attack relies on the client starting the authentication process, but not completing it (such as when the IdP is unavailable for example).

*Note:* The Apache CXF and Tomcat plugins are not vulnerable to these attacks.

## Remediation
Upgrade `org.apache.cxf.fediz:fediz-jetty8` to version 1.2.4, 1.3.2, 1.4.0 or higher.

## References
- [Github PR](http://cxf.apache.org/security-advisories.data/CVE-2017-7661.txt.asc)
- [Github Issue](http://www.openwall.com/lists/oss-security/2017/05/16/2)
- [Github Commit](https://github.com/apache/cxf-fediz/commit/acdbe8c213576792dd95d87315bcc181ea61b57f)
