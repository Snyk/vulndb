## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are  vulnerable to WSGI header spoofing. A malicious user could exploit this vulnerability by using an `_` character instead of a `-` in an HTTP header. In the WSGI environ, the `X-Auth-User` and the `X-Auth_User` headers are both converted to `HTTP_X_Auth_User`, allowing the attacker to bypass the protection.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jan/13/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0219)
