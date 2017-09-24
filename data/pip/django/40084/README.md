## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF). The CSRF protection mechanism does not properly handle web-server configurations supporting arbitrary HTTP Host headers, which allows remote attackers to trigger unauthenticated forged requests via vectors involving a DNS CNAME record and a web page containing JavaScript code.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4140)
