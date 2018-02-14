## Overview
[`org.apache.cxf.fediz:fediz-spring`](https://cxf.apache.org/) is an open source services framework.

Affected versions of this project are vulnerable to Cross-style Request Forgery (CSRF).
Apache CXF Fediz ships with a number of container-specific plugins to enable WS-Federation for applications. A CSRF (Cross Style Request Forgery) style vulnerability has been found in the Spring 2, Spring 3 and Spring 4 plugins.
The vulnerability can result in a security context that is set up using a malicious client's roles for the given enduser.

## Remediation
Upgrade `org.apache.cxf.fediz:fediz-spring` to version 1.3.3 or higher.

## References
- [Apache CXF Release Notes](http://cxf.apache.org/security-advisories.data/CVE-2017-12631.txt.asc)
- [GitHub Commit](https://github.com/apache/cxf-fediz/commit/e7127129dbc0f4ee83985052085e185e750cebbf)
- [Openwall](http://www.openwall.com/lists/oss-security/2017/11/30/4)
