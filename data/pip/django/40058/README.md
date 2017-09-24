## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks. It didn't properly validate HTTP requests containing an `X-Requested-With` header, which makes it easier for remote attackers to bypass CSRF protection with forged AJAX requests that leverage a "combination of browser plugins and redirects".

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2011/feb/08/security/)
- [Openwall](http://openwall.com/lists/oss-security/2011/02/09/6)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-0696)
