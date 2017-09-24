## Overview
[`twisted`](https://pypi.python.org/pypi/twisted) is a An asynchronous networking framework written in Python
Affected versions of this package are is vulnerable to Arbitrary HTTP Redirects. It was discovered that python-twisted-web used the value of the Proxy header from HTTP requests to initialize the HTTP_PROXY environment variable for CGI scripts, which in turn was incorrectly used by certain HTTP client implementations to configure the proxy for outgoing HTTP requests. A remote attacker could possibly use this flaw to redirect HTTP requests performed by a CGI script to an attacker-controlled proxy via a malicious HTTP request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1000111)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1357345)
- [Twistedmatrix Advisory](https://twistedmatrix.com/trac/ticket/8623)
- [GitHub PR](https://github.com/twisted/twisted/pull/482)
