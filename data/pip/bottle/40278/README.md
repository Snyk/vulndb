## Overview
[`bottle`](https://pypi.python.org/pypi/bottle) is a Fast and simple WSGI-framework for small web-applications.
Bottle 0.10.x before 0.10.12, 0.11.x before 0.11.7, and 0.12.x before 0.12.6 does not properly limit content types, which allows remote attackers to bypass intended access restrictions via an accepted Content-Type followed by a ; (semi-colon) and a Content-Type that would not be accepted, as demonstrated in YouCompleteMe to execute arbitrary code.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3137)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/05/01/15)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1093255)
- [GitHub Issue](https://github.com/bottlepy/bottle/issues/616)
