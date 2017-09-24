## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks. The cookie parsing code, when used on a site with Google Analytics, may allow remote attackers to to set arbitrary cookies leading to a bypass of CSRF protection.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/sep/26/security-releases/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7401)
