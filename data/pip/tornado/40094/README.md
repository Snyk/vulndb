## Overview
[`tornado`](https://pypi.python.org/pypi/tornado) is a Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed.
CRLF injection vulnerability in the tornado.web.RequestHandler.set_header function in Tornado before 2.2.1 allows remote attackers to inject arbitrary HTTP headers and conduct HTTP response splitting attacks via crafted input.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-2374)
- [Openwall](http://openwall.com/lists/oss-security/2012/05/18/12)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/05/18/6)
- [Tornado Release Notes](http://www.tornadoweb.org/documentation/releases/v2.2.1.html)
