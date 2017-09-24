## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Open Redirect. A maliciously crafted URL to a Django site using the `django.views.static.serve()` view could redirect to any other domain.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2017/apr/04/security-releases/)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-7234)
