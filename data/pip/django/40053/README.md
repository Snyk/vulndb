## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. It allows remote attackers to inject arbitrary web script or HTML via a `csrfmiddlewaretoken` (aka `csrf_token`) cookie.

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2010/sep/08/security-release/)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=632239)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-3082)
