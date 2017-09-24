## Overview
[`waitress`](https://pypi.python.org/pypi/waitress) is a Waitress WSGI server.

Affected versions of this package are vulnerable to WSGI header spoofing. A malicious user could exploit this vulnerability by using an `_` character instead of a `-` in an HTTP header. In the WSGI environ, the `X-Auth-User` and the `X-Auth_User` headers are both converted to `HTTP_X_Auth_User`, allowing the attacker to bypass the protection. This vulnerability is related to [CVE-2015-0219](https://snyk.io/vuln/SNYK-PYTHON-DJANGO-40302)

## References
- [GitHub Issue](https://github.com/Pylons/waitress/issues/81)
- [GitHub PR](https://github.com/Pylons/waitress/pull/129)
- [GitHub Commit](https://github.com/Pylons/waitress/commit/7f4e0f7b9c14aba74dd1da7a030072d79ca99b6b)
