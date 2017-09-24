## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Session Hijacking. The `RemoteUserMiddleware` when using the `contrib.auth.backends.RemoteUserBackend` backend, allows remote authenticated users to hijack web sessions via the `REMOTE_USER` header as logout/login actions are not checked.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/aug/20/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0482)
