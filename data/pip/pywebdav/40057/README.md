## Overview
[`pywebdav`](https://pypi.python.org/pypi/pywebdav) is a WebDAV library including a standalone server for python
Multiple SQL injection vulnerabilities in the get_userinfo method in the MySQLAuthHandler class in DAVServer/mysqlauth.py in PyWebDAV before 0.9.4.1 allow remote attackers to execute arbitrary SQL commands via the (1) user or (2) pw argument.  NOTE: some of these details are obtained from third party information.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-0432)
- [Debian Security Advisory](http://www.debian.org/security/2011/dsa-2177)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=677718)
