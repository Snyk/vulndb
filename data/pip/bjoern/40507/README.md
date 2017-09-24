## Overview
[`bjoern`](https://pypi.python.org/pypi/bjoern) is a fast Python WSGI server written in C.

Affected versions of this package are vulnerable to WSGI header spoofing. A malicious user could exploit this vulnerability by using an `_` character instead of a `-` in an HTTP header. In the WSGI environ, the `X-Auth-User` and the `X-Auth_User` headers are both converted to `HTTP_X_Auth_User`, allowing the attacker to bypass the protection. This vulnerability is related to [CVE-2014-3566](https://nvd.nist.gov/vuln/detail/CVE-2014-3566)

## References
- [GitHub Commit](https://github.com/jonashaag/bjoern/commit/9fd4d605cb7859632af7cc0f93b9a512510be66b)
- [DJango Security Issue](https://www.djangoproject.com/weblog/2015/jan/13/security/)
