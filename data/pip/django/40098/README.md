## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). The `HttpResponseRedirect` and `HttpResponsePermanentRedirect` classes do not validate the scheme of a redirect target, allowing attackers to use Data: URLs to conduct an attack.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2012/jul/30/security-releases-issued/)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/07/31/2),
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3442)
