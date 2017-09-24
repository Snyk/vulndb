## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.
Autoescaping of HTML was disabled by default in the technical 500 debug page template. This vulnerability shouldn't affect most production sites since you shouldn't run with `DEBUG = True` in production settings. 

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2017/sep/05/security-releases/)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12794)
