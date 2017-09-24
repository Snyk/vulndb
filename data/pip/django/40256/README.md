## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cache Poisoning. It does not properly include the `Vary: Cookie` or `Cache-Control` header in responses, which allows remote attackers to obtain sensitive information or poison the cache via a request from certain browsers.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/may/14/security-releases-issued/)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/05/14/10)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1418)
