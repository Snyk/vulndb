## Overview
[io.undertow:undertow-core](https://github.com/undertow-io/undertow) is a Java web server based on non-blocking IO.

Affected versions of this package are vulnerable to HTTP Request Smuggling.
The code that parsed the HTTP request line allowed invalid characters in the query string and path parameters. By manipulating the HTTP response the attacker could poison a web-cache, perform an XSS attack, or obtain sensitive information from requests other than their own.

## Remediation
Upgrade `io.undertow:undertow-core` to version 2.0.0.Alpha2, 1.4.17.Final, 1.3.31.Final or higher.

## References
- [RedHat Bugzilla](https://access.redhat.com/security/cve/cve-2017-2666)
- [RedHat Bugzilla bug](https://bugzilla.redhat.com/show_bug.cgi?id=1436163)
