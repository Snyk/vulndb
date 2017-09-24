## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to DNS Rebinding attacks. When `settings.DEBUG` is set to `True`, it fails to validate the HTTP Host header against `settings.ALLOWED_HOSTS` making it possible to manipulate the host header. This is at least cross-site scripting vector, which could be quite serious if developers load a copy of the production database in development or connect to some production services for which there's no development instance. Also, if a project uses a package like the `django-debug-toolbar`, the attacker could also execute arbitrary SQL.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/nov/01/security-releases/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9014)
