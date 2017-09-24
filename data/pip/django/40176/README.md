## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The `AdminURLFieldWidget` widget in allows remote attackers to inject arbitrary web script or HTML via a URLField.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4249)
- [OSS Security](http://seclists.org/oss-sec/2013/q3/369)
- [GitHub Commit 1.5.x](https://github.com/django/django/commit/90363e388c61874add3f3557ee654a996ec75d78)
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/aug/13/security-releases-issued)
