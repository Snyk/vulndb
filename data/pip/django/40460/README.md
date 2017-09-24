## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Open Redirect. It relies on user input in some cases to redirect the user to an "on success" URL. The security check for these redirects (namely `django.utils.http.is_safe_url()`) considered some numeric URLs "safe" when they shouldn't be, aka an open redirect vulnerability. Also, if a developer relies on `is_safe_url()` to provide safe redirect targets and puts such a URL into a link, they could suffer from an XSS attack.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2017/apr/04/security-releases/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-7233)
