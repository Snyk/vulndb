## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Host Header Poisoning. The `django.http.HttpRequest.get_host` function incorrectly handled username/password information in the header. This allows remote attackers to generate and display arbitrary URLs via crafted username and password Host header values.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2012/oct/17/security/)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=865164)
- [GitHub Commit 1.3.x](https://github.com/django/django/commit/b45c377f8f488955e0c7069cad3f3dd21910b071)
- [GitHub Commit 1.4.x](https://github.com/django/django/commit/92d3430f12171f16f566c9050c40feefb830a4a3)
- [GitHub Commit 1.5.a1](https://github.com/django/django/commit/9305c0e12d43c4df999c3301a1f0c742264a657e)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/10/30/4)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-4520)
