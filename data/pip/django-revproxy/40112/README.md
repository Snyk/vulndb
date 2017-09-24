## Overview
[`django-revproxy`](https://pypi.python.org/pypi/django-revproxy) is a simple reverse proxy using Django. It allows to use Django as a reverse Proxy to HTTP requets. It also allows to use Django as an authentication Proxy.

Affected versions of this package are vulnerable to Open Redirect attacks. When a colon is present in the URL path, the `urljoin` method ignores the upstream request and redirects it to a path cntrolled by an attacker, possibly causing content injection.

## References
- [GitHub ChangeLog](https://github.com/TracyWebTech/django-revproxy/blob/master/CHANGELOG.rst#097-2015-09-17)
- [GitHub Commit](https://github.com/TracyWebTech/django-revproxy/commit/e9b4dfd162c73adbad6077355c9420d0c40d4f3f)
