## Overview
[`org.apache.cxf.fediz:fediz-oidc`](https://cxf.apache.org/) is an open source services framework.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).

Apache CXF Fediz ships with an OpenId Connect (OIDC) service which has a Client Registration Service, which is a simple web application that allows clients to be created, deleted, etc. A CSRF (Cross Style Request Forgery) style vulnerability has been found in this web application in Apache CXF Fediz prior to 1.4.0 and 1.3.2, meaning that a malicious web application could create new clients, or reset secrets, etc, after the admin user has logged on to the client registration service and the session is still active.

## Remediation
Upgrade `org.apache.cxf.fediz:fediz-oidc` to version 1.3.2, 1.4.0 or higher.

## References
- [Github PR](http://cxf.apache.org/security-advisories.data/CVE-2017-7662.txt.asc)
- [Github Issue](http://www.openwall.com/lists/oss-security/2017/05/16/2)
- [Github Commit](https://github.com/apache/cxf-fediz/commit/c68e4820816c19241568f4a8fe8600bffb0243cd)
