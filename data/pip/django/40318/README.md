## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The `utils.http.is_safe_url` function did not properly validate URLs, allowing the execustion of URLs of the sort: `\x08javascript: URL`.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/mar/18/security-releases/)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinapr2015-2511959.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2317)
