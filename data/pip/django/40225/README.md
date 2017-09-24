## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Directory Traversal attacks. In the ssi template tag, the `ALLOWED_INCLUDE_ROOTS` setting is a path that, with the use of `..` (dot dot), allows an attacker to access files for reading.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/sep/10/security-releases-issued/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4315)
