## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The is_safe_url function treats a URL's scheme's like `javascript: scheme` as safe even if it is not HTTP or HTTPS

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/aug/13/security-releases-issued)
- [OSS Security](http://seclists.org/oss-sec/2013/q3/369)
- [GitHub Commit 1.5.x](https://github.com/django/django/commit/1a274ccd6bc1afbdac80344c9b6e5810c1162b5f)
- [GitHub Commit 1.4.x](https://github.com/django/django/commit/ec67af0bd609c412b76eaa4cc89968a2a8e5ad6a)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-6044)
